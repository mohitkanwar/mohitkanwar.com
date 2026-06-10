(function () {
  var EVENT_SCHEMA_VERSION = "2026-03-31";

  function isDebugEnabled() {
    try {
      var params = new URLSearchParams(window.location.search || "");
      if (params.get("ctaDebug") === "1") {
        localStorage.setItem("mkCtaDebug", "1");
        return true;
      }
      if (params.get("ctaDebug") === "0") {
        localStorage.removeItem("mkCtaDebug");
        return false;
      }
      if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
        return true;
      }
      return localStorage.getItem("mkCtaDebug") === "1";
    } catch (e) {
      return false;
    }
  }

  var debugEnabled = isDebugEnabled();

  function debugLog() {
    if (!debugEnabled || !window.console || typeof window.console.info !== "function") return;
    var args = Array.prototype.slice.call(arguments);
    args.unshift("[mk-cta-tracking]");
    window.console.info.apply(window.console, args);
  }

  function normalizeHref(href) {
    if (!href) return "";
    try {
      var url = new URL(href, window.location.origin);
      return url.pathname + (url.hash || "");
    } catch (e) {
      return href;
    }
  }

  function inferEventName(normalizedHref, rawHref) {
    if (!normalizedHref && !rawHref) return "";
    var rawLower = (rawHref || "").toLowerCase();
    if (normalizedHref.indexOf("/work-with-me") !== -1) return "cta_work_with_me_click";
    if (normalizedHref.indexOf("/speaking") !== -1) return "cta_speaking_click";
    if (normalizedHref.indexOf("/solutions/digital-banking-modernization-case-study") !== -1) return "cta_case_study_click";
    if (normalizedHref.indexOf("#contact") !== -1) return "cta_contact_click";
    if (rawLower.indexOf("linkedin.com") !== -1) return "cta_linkedin_click";
    if (rawLower.indexOf("substack.com") !== -1 || rawLower.indexOf("convertkit.com") !== -1) return "cta_newsletter_click";
    return "";
  }

  function inferDestinationType(normalizedHref, rawHref) {
    var raw = rawHref || "";
    var rawLower = raw.toLowerCase();

    if (!raw && !normalizedHref) return "unknown";
    if (rawLower.indexOf("mailto:") === 0) return "email";
    if (rawLower.indexOf("tel:") === 0) return "phone";
    if (rawLower.indexOf("linkedin.com") !== -1) return "linkedin";
    if (rawLower.indexOf("twitter.com") !== -1 || rawLower.indexOf("x.com") !== -1) return "twitter";
    if (rawLower.indexOf("whatsapp.com") !== -1) return "whatsapp";
    if (rawLower.indexOf("substack.com") !== -1 || rawLower.indexOf("convertkit.com") !== -1) return "newsletter";
    if (rawLower.indexOf("#") === 0 || normalizedHref.indexOf("#") !== -1) return "anchor";
    if (normalizedHref.indexOf("/blogs") === 0) return "blog";
    if (normalizedHref.indexOf("/videos") === 0) return "video";
    if (normalizedHref.indexOf("/solutions") === 0) return "solution";
    if (normalizedHref.indexOf("/work-with-me") === 0) return "work-with-me";
    if (normalizedHref.indexOf("/speaking") === 0) return "speaking";
    if (/^https?:\/\//i.test(raw)) return "external";
    return "internal";
  }

  function sendEvent(eventName, payload) {
    if (!eventName) return;

    var metadata = getEventMetadata(eventName);
    var finalPayload = {
      event_schema_version: EVENT_SCHEMA_VERSION,
      event_group: metadata.group,
      event_action: metadata.action,
      ...payload,
    };
    if (!finalPayload.event_label && finalPayload.cta_content) {
      finalPayload.event_label = finalPayload.cta_content;
    }

    debugLog("event", eventName, finalPayload);

    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, finalPayload);
      recordBaselineEvent(eventName, finalPayload);
      return;
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      ...finalPayload,
    });
    recordBaselineEvent(eventName, finalPayload);

    debugLog("pushed to dataLayer", window.dataLayer[window.dataLayer.length - 1]);
  }

  function getEventMetadata(eventName) {
    var action = eventName;
    var group = "other";

    if (eventName.indexOf("cta_share_") === 0) {
      group = "share";
      action = eventName.replace("cta_", "");
    } else if (eventName.indexOf("cta_related_") === 0 || eventName === "cta_hub_recommendation_click") {
      group = "discovery";
      action = eventName.replace("cta_", "");
    } else if (eventName.indexOf("cta_") === 0) {
      group = "conversion";
      action = eventName.replace("cta_", "");
    } else if (eventName.indexOf("page_") === 0) {
      group = "engagement";
    } else if (eventName.indexOf("experiment_") === 0) {
      group = "experiment";
    }

    return { group: group, action: action };
  }

  function formatDate(date) {
    var yyyy = date.getFullYear();
    var mm = String(date.getMonth() + 1).padStart(2, "0");
    var dd = String(date.getDate()).padStart(2, "0");
    return yyyy + "-" + mm + "-" + dd;
  }

  function loadBaselineStore() {
    try {
      var raw = localStorage.getItem("mkAnalyticsBaseline.v1");
      if (!raw) return { byDay: {} };
      var parsed = JSON.parse(raw);
      return parsed && parsed.byDay ? parsed : { byDay: {} };
    } catch (e) {
      return { byDay: {} };
    }
  }

  function saveBaselineStore(store) {
    try {
      localStorage.setItem("mkAnalyticsBaseline.v1", JSON.stringify(store));
    } catch (e) {
      // ignore storage failures
    }
  }

  function pruneBaselineStore(store, keepDays) {
    var cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - keepDays);
    var cutoffKey = formatDate(cutoff);
    Object.keys(store.byDay).forEach(function (k) {
      if (k < cutoffKey) delete store.byDay[k];
    });
  }

  function recordBaselineEvent(eventName, payload) {
    var store = loadBaselineStore();
    pruneBaselineStore(store, 90);
    var dayKey = formatDate(new Date());

    if (!store.byDay[dayKey]) {
      store.byDay[dayKey] = { total: 0, events: {}, groups: {} };
    }

    var day = store.byDay[dayKey];
    day.total += 1;
    day.events[eventName] = (day.events[eventName] || 0) + 1;

    var group = payload && payload.event_group ? payload.event_group : "other";
    day.groups[group] = (day.groups[group] || 0) + 1;

    saveBaselineStore(store);
  }

  function buildBaselineReport(days) {
    var windowDays = Math.max(1, days || 7);
    var store = loadBaselineStore();
    var report = {
      days: windowDays,
      totalEvents: 0,
      byEvent: {},
      byGroup: {},
      byDay: {},
    };

    for (var i = 0; i < windowDays; i++) {
      var d = new Date();
      d.setDate(d.getDate() - i);
      var key = formatDate(d);
      var day = store.byDay[key];
      if (!day) continue;

      report.byDay[key] = day;
      report.totalEvents += day.total || 0;

      Object.keys(day.events || {}).forEach(function (name) {
        report.byEvent[name] = (report.byEvent[name] || 0) + day.events[name];
      });

      Object.keys(day.groups || {}).forEach(function (name) {
        report.byGroup[name] = (report.byGroup[name] || 0) + day.groups[name];
      });
    }

    return report;
  }

  function sortEntries(obj) {
    return Object.entries(obj || {}).sort(function (a, b) {
      return b[1] - a[1];
    });
  }

  function buildWindowReport(startOffsetDays, days) {
    var windowDays = Math.max(1, days || 7);
    var store = loadBaselineStore();
    var report = {
      days: windowDays,
      startOffsetDays: startOffsetDays || 0,
      totalEvents: 0,
      byEvent: {},
      byGroup: {},
      byDay: {},
    };

    for (var i = startOffsetDays || 0; i < (startOffsetDays || 0) + windowDays; i++) {
      var d = new Date();
      d.setDate(d.getDate() - i);
      var key = formatDate(d);
      var day = store.byDay[key];
      if (!day) continue;

      report.byDay[key] = day;
      report.totalEvents += day.total || 0;

      Object.keys(day.events || {}).forEach(function (name) {
        report.byEvent[name] = (report.byEvent[name] || 0) + day.events[name];
      });

      Object.keys(day.groups || {}).forEach(function (name) {
        report.byGroup[name] = (report.byGroup[name] || 0) + day.groups[name];
      });
    }

    return report;
  }

  function compareReports(current, previous) {
    var allEvents = {};
    Object.keys(current.byEvent || {}).forEach(function (k) { allEvents[k] = true; });
    Object.keys(previous.byEvent || {}).forEach(function (k) { allEvents[k] = true; });

    return Object.keys(allEvents).map(function (name) {
      var currentCount = current.byEvent[name] || 0;
      var previousCount = previous.byEvent[name] || 0;
      return {
        name: name,
        current: currentCount,
        previous: previousCount,
        delta: currentCount - previousCount,
      };
    }).sort(function (a, b) {
      return Math.abs(b.delta) - Math.abs(a.delta);
    });
  }

  function buildWeeklyActions(current, previous) {
    var actions = [];
    var newsletterCurrent = current.byEvent.cta_newsletter_click || 0;
    var newsletterPrevious = previous.byEvent.cta_newsletter_click || 0;
    var discoveryCurrent = (current.byGroup.discovery || 0) + (current.byEvent.cta_hub_recommendation_click || 0);
    var shareCurrent = current.byGroup.share || 0;
    var engagedCurrent = current.byEvent.page_engaged_30s || 0;

    if (newsletterCurrent < newsletterPrevious) {
      actions.push("Newsletter clicks are down week-over-week. Review the active subscribe copy variant and compare performance by surface.");
    }
    if (discoveryCurrent < 10) {
      actions.push("Discovery clicks are low. Promote fresher posts/videos in the homepage latest-proof strip and hub recommendation blocks.");
    }
    if (shareCurrent === 0) {
      actions.push("No social-share activity detected. Consider adding a stronger share prompt on top-performing posts.");
    }
    if (engagedCurrent > 0 && newsletterCurrent === 0) {
      actions.push("Readers are engaging but not subscribing. Tighten subscribe copy or move subscribe surfaces higher on key pages.");
    }
    if (actions.length === 0) {
      actions.push("No immediate drop detected. Double down on surfaces generating the highest newsletter and discovery clicks.");
    }

    return actions.slice(0, 3);
  }

  function buildWeeklySnapshot(days) {
    var windowDays = Math.max(1, days || 7);
    var current = buildWindowReport(0, windowDays);
    var previous = buildWindowReport(windowDays, windowDays);
    var deltas = compareReports(current, previous);
    var wins = deltas.filter(function (item) { return item.delta > 0; }).slice(0, 3);
    var drops = deltas.filter(function (item) { return item.delta < 0; }).slice(0, 3);

    return {
      generatedAt: new Date().toISOString(),
      days: windowDays,
      current: current,
      previous: previous,
      topEvents: sortEntries(current.byEvent).slice(0, 10),
      topGroups: sortEntries(current.byGroup).slice(0, 10),
      wins: wins,
      drops: drops,
      actions: buildWeeklyActions(current, previous),
    };
  }

  function initSubscribeCopyExperiment() {
    var key = "mkSubscribeCopyVariant.v1";
    var variant = localStorage.getItem(key);
    var variants = ["A", "B", "C"];
    if (!variant || variants.indexOf(variant) === -1) {
      variant = variants[Math.floor(Math.random() * variants.length)];
      localStorage.setItem(key, variant);
    }

    var surfaces = {
      "home-section": {
        A: {
          title: "Get practical architecture notes in your inbox",
          copy: "High-signal writing on FinTech architecture, AI in financial services, engineering leadership, and platform modernization. Written from delivery experience, not theory.",
        },
        B: {
          title: "Steal the frameworks behind successful platform modernization",
          copy: "Short, practical notes on architecture decisions, delivery governance, and leadership patterns that work in regulated environments.",
        },
        C: {
          title: "One useful architecture insight, delivered regularly",
          copy: "Join readers who use these playbooks for FinTech architecture, AI adoption, and engineering execution.",
        },
      },
      "blog-hub": {
        A: {
          title: "Subscribe for high-signal architecture notes",
          copy: "Practical insights on FinTech architecture, AI in financial services, and engineering leadership.",
        },
        B: {
          title: "Get one practical breakdown every week",
          copy: "Architecture trade-offs, modernization patterns, and leadership lessons from real delivery contexts.",
        },
        C: {
          title: "Stay ahead on platform and AI decisions",
          copy: "Clear, no-fluff notes for builders and engineering leaders in banking and digital finance.",
        },
      },
      "video-hub": {
        A: {
          title: "Subscribe for practical architecture and product notes",
          copy: "Short, useful updates on FinTech architecture, AI, engineering leadership, and digital platform decisions.",
        },
        B: {
          title: "Get the strategy behind each video",
          copy: "Receive concise written breakdowns that complement videos on build-vs-buy, security, and platform outcomes.",
        },
        C: {
          title: "Turn ideas into architecture action",
          copy: "Subscribe for implementation-focused notes you can apply immediately with your team.",
        },
      },
    };

    var blocks = document.querySelectorAll("[data-subscribe-surface]");
    blocks.forEach(function (block) {
      var surface = block.getAttribute("data-subscribe-surface");
      if (!surface || !surfaces[surface]) return;

      var copy = surfaces[surface][variant] || surfaces[surface].A;
      var titleEl = block.querySelector("[data-subscribe-title]");
      var copyEl = block.querySelector("[data-subscribe-copy]");
      if (titleEl) titleEl.textContent = copy.title;
      if (copyEl) copyEl.textContent = copy.copy;

      sendEvent("experiment_subscribe_copy_exposed", {
        page_path: window.location.pathname,
        page_type: inferPageType(window.location.pathname),
        experiment_name: "subscribe_copy_v1",
        experiment_variant: variant,
        cta_source: surface,
      });
    });
  }

  function inferPageType(pathname) {
    var path = pathname || "";
    if (path === "/" || path === "") return "home";
    if (path.indexOf("/blogs/") === 0) return "blog";
    if (path.indexOf("/videos/") === 0) return "video";
    if (path.indexOf("/solutions/") === 0) return "solution";
    if (path.indexOf("/speaking") === 0) return "speaking";
    if (path.indexOf("/work-with-me") === 0) return "work-with-me";
    if (path.indexOf("/newsletter") === 0) return "newsletter";
    return "other";
  }

  function trackEngagement() {
    var milestones = [25, 50, 75, 90];
    var fired = {};
    var ticking = false;

    function checkScrollMilestones() {
      ticking = false;

      var doc = document.documentElement;
      var maxScroll = doc.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) return;

      var scrolled = window.scrollY || doc.scrollTop || 0;
      var percent = Math.min(100, Math.round((scrolled / maxScroll) * 100));

      for (var i = 0; i < milestones.length; i++) {
        var m = milestones[i];
        if (percent >= m && !fired[m]) {
          fired[m] = true;
          sendEvent("page_scroll_depth", {
            page_path: window.location.pathname,
            page_type: inferPageType(window.location.pathname),
            scroll_percent: m,
          });
        }
      }
    }

    window.addEventListener("scroll", function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(checkScrollMilestones);
    }, { passive: true });

    window.setTimeout(function () {
      if (document.visibilityState !== "visible") return;
      sendEvent("page_engaged_30s", {
        page_path: window.location.pathname,
        page_type: inferPageType(window.location.pathname),
      });
    }, 30000);
  }

  document.addEventListener("click", function (evt) {
    var target = evt.target && evt.target.closest ? evt.target.closest("a,button") : null;
    if (!target) return;

    if (target.dataset.copyUrl && navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(target.dataset.copyUrl).then(function () {
        target.classList.add("mk-share-copy-done");
        window.setTimeout(function () {
          target.classList.remove("mk-share-copy-done");
        }, 1600);
      }).catch(function () {});
    }

    var rawHref = target.getAttribute("href") || target.dataset.ctaHref || "";
    var normalizedHref = normalizeHref(rawHref);
    var eventName = target.dataset.ctaEvent || inferEventName(normalizedHref, rawHref);
    if (!eventName) return;

    var payload = {
      page_path: window.location.pathname,
      link_href: normalizedHref || rawHref,
      link_text: (target.textContent || "").trim().slice(0, 120),
      cta_source: target.dataset.ctaSource || "global",
      cta_destination: inferDestinationType(normalizedHref, rawHref),
    };

    if (target.dataset.ctaCampaign) {
      payload.cta_campaign = target.dataset.ctaCampaign;
    }

    if (target.dataset.ctaContent) {
      payload.cta_content = target.dataset.ctaContent;
    }

    sendEvent(eventName, payload);
  });

  trackEngagement();
  initSubscribeCopyExperiment();

  window.mkAnalyticsEventMap = {
    schemaVersion: EVENT_SCHEMA_VERSION,
    groups: ["conversion", "discovery", "share", "engagement", "experiment"],
    examples: [
      "cta_newsletter_click",
      "cta_hub_recommendation_click",
      "cta_related_article_click",
      "cta_related_video_click",
      "cta_share_linkedin_click",
      "page_scroll_depth",
      "page_engaged_30s",
      "experiment_subscribe_copy_exposed",
    ],
  };

  window.mkAnalyticsBaselineReport = function (days) {
    return buildBaselineReport(days || 7);
  };

  window.mkAnalyticsWeeklySnapshot = function (days) {
    return buildWeeklySnapshot(days || 7);
  };
})();
