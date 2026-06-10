(function () {
  "use strict";

  function normalize(value) {
    return (value || "")
      .toString()
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function getTerms(button) {
    var raw = button.getAttribute("data-filter-match") || button.getAttribute("data-filter-value") || "";
    return raw
      .split("|")
      .map(normalize)
      .filter(Boolean);
  }

  function getItemText(item) {
    return normalize(item.getAttribute("data-filter-text"));
  }

  function itemMatchesButton(item, button) {
    if (!button || button.getAttribute("data-filter-value") === "all") return true;
    var text = getItemText(item);
    return getTerms(button).some(function (term) {
      return text.indexOf(term) !== -1;
    });
  }

  function itemMatchesSearch(item, query) {
    if (!query) return true;
    var text = getItemText(item);
    return query.split(" ").every(function (term) {
      return text.indexOf(term) !== -1;
    });
  }

  function updateButtonCounts(scope, buttons, items) {
    buttons.forEach(function (button) {
      var count = items.filter(function (item) {
        return itemMatchesButton(item, button);
      }).length;
      var badge = button.querySelector("[data-filter-count-badge]");
      if (badge) badge.textContent = count ? "(" + count + ")" : "";
      if (button.getAttribute("data-filter-value") !== "all" && count === 0) {
        button.hidden = true;
      }
    });
  }

  function initScope(scope) {
    var buttons = Array.prototype.slice.call(scope.querySelectorAll("[data-filter-button]"));
    var items = Array.prototype.slice.call(scope.querySelectorAll("[data-filter-item]"));
    var search = scope.querySelector("[data-filter-search]");
    var visibleCount = scope.querySelector("[data-filter-visible-count]");
    var totalCount = scope.querySelector("[data-filter-total-count]");
    var totalWrap = scope.querySelector("[data-filter-total-wrap]");
    var empty = scope.querySelector("[data-filter-empty]");
    var showMore = scope.querySelector("[data-show-more]");
    var showMoreLimit = parseInt(scope.getAttribute("data-show-more-limit") || "", 10);
    var showMoreStep = parseInt(scope.getAttribute("data-show-more-step") || "", 10);
    var hasShowMore = Number.isFinite(showMoreLimit) && showMoreLimit > 0;
    var visibleLimit = hasShowMore ? showMoreLimit : Infinity;

    if (!Number.isFinite(showMoreStep) || showMoreStep <= 0) {
      showMoreStep = showMoreLimit || 12;
    }

    var activeButton = buttons.find(function (button) {
      return button.getAttribute("aria-pressed") === "true";
    }) || buttons[0];

    if (!buttons.length || !items.length) return;

    function setActive(nextButton) {
      activeButton = nextButton || buttons[0];
      buttons.forEach(function (button) {
        var active = button === activeButton;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-pressed", active ? "true" : "false");
      });
    }

    function resetVisibleLimit() {
      visibleLimit = hasShowMore ? showMoreLimit : Infinity;
    }

    function apply() {
      var query = normalize(search && search.value);
      var matched = items.filter(function (item) {
        return itemMatchesButton(item, activeButton) && itemMatchesSearch(item, query);
      });
      var shown = Math.min(matched.length, visibleLimit);

      items.forEach(function (item) {
        item.hidden = true;
      });

      matched.slice(0, shown).forEach(function (item) {
        item.hidden = false;
      });

      if (visibleCount) visibleCount.textContent = shown;
      if (totalCount) totalCount.textContent = matched.length;
      if (totalWrap) totalWrap.hidden = !hasShowMore || shown === matched.length;
      if (empty) empty.hidden = matched.length !== 0;
      if (showMore) showMore.hidden = !hasShowMore || shown >= matched.length;

      var feature = scope.querySelector("[data-filter-feature]");
      if (feature) {
        scope.classList.toggle("is-feature-hidden", feature.hidden);
      }
    }

    updateButtonCounts(scope, buttons, items);
    setActive(activeButton);
    apply();

    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        setActive(button);
        resetVisibleLimit();
        apply();
      });
    });

    if (search) {
      search.addEventListener("input", function () {
        resetVisibleLimit();
        apply();
      });
    }

    if (showMore) {
      showMore.addEventListener("click", function () {
        visibleLimit += showMoreStep;
        apply();
      });
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    Array.prototype.slice.call(document.querySelectorAll("[data-filter-scope]")).forEach(initScope);
  });
})();
