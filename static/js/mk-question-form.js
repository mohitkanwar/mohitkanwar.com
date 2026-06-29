(function () {
  var pendingRecaptchaForm = null;

  function ready(callback) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback);
      return;
    }
    callback();
  }

  function getValue(form, name) {
    var field = form.elements[name];
    return field ? String(field.value || "").trim() : "";
  }

  function buildQuestionText(form) {
    var lines = [
      "Topic: " + getValue(form, "topic"),
      "Name: " + (getValue(form, "name") || "Not provided"),
      "Email: " + getValue(form, "email"),
      "Role or organization: " + (getValue(form, "role") || "Not provided"),
      "",
      "Question:",
      getValue(form, "question"),
      "",
      "Useful context:",
      getValue(form, "context") || "Not provided",
      "",
      "Source page: " + (getValue(form, "page_title") || document.title),
      "Page URL: " + (getValue(form, "page_url") || window.location.href),
    ];

    return lines.join("\n");
  }

  function setBusy(form, isBusy) {
    var button = form.querySelector("[data-question-submit]");
    if (!button) return;
    button.disabled = isBusy;
    button.textContent = isBusy ? "Sending..." : "Send question";
  }

  function syncMessageField(form) {
    var messageField = form.elements.message;
    if (!messageField) return;
    messageField.value = buildQuestionText(form);
  }

  function usesNativeSubmit(form) {
    return form.getAttribute("data-native-submit") === "true";
  }

  function usesRecaptchaV3(form) {
    return form.getAttribute("data-recaptcha-v3") === "true";
  }

  function setRecaptchaToken(form, token) {
    var tokenField = form.elements["g-recaptcha-response"];

    if (!tokenField) {
      tokenField = document.createElement("input");
      tokenField.type = "hidden";
      tokenField.name = "g-recaptcha-response";
      form.appendChild(tokenField);
    }

    tokenField.value = token || "";
  }

  function extractErrorMessage(body, fallback) {
    if (!body) return fallback;

    if (typeof body === "string") {
      return body || fallback;
    }

    if (body.error) {
      return body.error;
    }

    if (body.message) {
      return body.message;
    }

    if (body.errors && body.errors.length) {
      return body.errors.map(function (error) {
        return error.message || error.code || String(error);
      }).join(" ");
    }

    return fallback;
  }

  function showStatus(form, type, message, link) {
    var status = form.querySelector("[data-question-status]");
    if (!status) return;

    status.innerHTML = "";

    var alert = document.createElement("div");
    alert.className = "mk-question-alert mk-question-alert-" + type;
    alert.setAttribute(type === "danger" ? "role" : "aria-live", type === "danger" ? "alert" : "polite");

    var text = document.createElement("span");
    text.textContent = message;
    alert.appendChild(text);

    if (link && link.href && link.label) {
      var anchor = document.createElement("a");
      anchor.href = link.href;
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
      anchor.textContent = link.label;
      alert.appendChild(anchor);
    }

    status.appendChild(alert);
  }

  function trackSubmit(form, mode) {
    var payload = {
      event_group: "conversion",
      event_action: "reader_question_submit",
      question_topic: getValue(form, "topic"),
      cta_source: form.getAttribute("data-source") || "blog-question-form",
      delivery_mode: mode,
    };

    if (typeof window.gtag === "function") {
      window.gtag("event", "reader_question_submit", payload);
      return;
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "reader_question_submit",
      event_schema_version: "2026-06-29",
      event_label: payload.question_topic,
      ...payload,
    });
  }

  function submitFormNatively(form, mode) {
    syncMessageField(form);
    setBusy(form, true);
    trackSubmit(form, mode);
    HTMLFormElement.prototype.submit.call(form);
  }

  function prepareRecaptchaSubmit(form) {
    if (!form) return false;

    if (getValue(form, "_gotcha")) {
      pendingRecaptchaForm = null;
      form.reset();
      return false;
    }

    if (!form.checkValidity()) {
      pendingRecaptchaForm = null;
      form.reportValidity();
      return false;
    }

    pendingRecaptchaForm = form;
    syncMessageField(form);
    return true;
  }

  window.mkQuestionFormRecaptchaSubmit = function (token) {
    var form = pendingRecaptchaForm;
    if (!form) return;

    if (!token) {
      setBusy(form, false);
      pendingRecaptchaForm = null;
      showStatus(form, "danger", "reCAPTCHA did not return a verification token. Please try again.");
      return;
    }

    if (getValue(form, "_gotcha")) {
      pendingRecaptchaForm = null;
      form.reset();
      return;
    }

    if (!form.checkValidity()) {
      setBusy(form, false);
      pendingRecaptchaForm = null;
      form.reportValidity();
      return;
    }

    setRecaptchaToken(form, token);
    submitFormNatively(form, "recaptcha-native-endpoint");
    pendingRecaptchaForm = null;
  };

  function handleEndpointSubmit(form, endpoint, data) {
    setBusy(form, true);

    fetch(endpoint, {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then(function (response) {
        if (response.ok) {
          showStatus(form, "success", "Thanks. Your question has been sent.");
          trackSubmit(form, "endpoint");
          form.reset();
          return;
        }

        return response.text().then(function (text) {
          var body = text;
          try {
            body = text ? JSON.parse(text) : null;
          } catch (e) {
            body = text;
          }
          var message = extractErrorMessage(body, "Formspree returned " + response.status + ". Please check the form configuration.");
          showStatus(form, "danger", message);
        }).catch(function () {
          showStatus(form, "danger", "Formspree returned " + response.status + ". Please check the form configuration.");
        });
      })
      .catch(function () {
        showStatus(form, "danger", "The request could not reach Formspree. Please check the network connection and form endpoint.");
      })
      .finally(function () {
        setBusy(form, false);
      });
  }

  function handleEmailFallback(form, recipientEmail) {
    var subject = encodeURIComponent("BFSI / FinTech architecture query");
    var body = encodeURIComponent(buildQuestionText(form));
    window.location.href = "mailto:" + encodeURIComponent(recipientEmail) + "?subject=" + subject + "&body=" + body;
    showStatus(form, "success", "Your email client is opening with the question filled in.");
    trackSubmit(form, "email");
  }

  function handleLinkedInFallback(form, linkedinUrl) {
    var questionText = buildQuestionText(form);
    var done = function (copied) {
      var message = copied
        ? "Your question has been copied. Send it on LinkedIn when the profile opens."
        : "Your question is ready. Send it on LinkedIn from the profile link.";
      showStatus(form, "info", message, {
        href: linkedinUrl,
        label: "Open LinkedIn",
      });
      trackSubmit(form, "linkedin");
    };

    if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
      navigator.clipboard.writeText(questionText).then(function () {
        done(true);
      }).catch(function () {
        done(false);
      });
      return;
    }

    done(false);
  }

  ready(function () {
    var forms = document.querySelectorAll("[data-question-form]");

    document.addEventListener("click", function (event) {
      if (!event.target || typeof event.target.closest !== "function") return;

      var button = event.target.closest("[data-question-recaptcha-submit]");
      if (!button) return;

      if (!prepareRecaptchaSubmit(button.form)) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    }, true);

    forms.forEach(function (form) {
      form.addEventListener("submit", function (event) {
        if (getValue(form, "_gotcha")) {
          event.preventDefault();
          form.reset();
          return;
        }

        var endpoint = form.getAttribute("data-endpoint") || "";
        var recipientEmail = form.getAttribute("data-recipient-email") || "";
        var linkedinUrl = form.getAttribute("data-linkedin-url") || "";

        if (endpoint && usesNativeSubmit(form)) {
          if (usesRecaptchaV3(form)) {
            event.preventDefault();
            if (prepareRecaptchaSubmit(form)) {
              var recaptchaButton = form.querySelector("[data-question-recaptcha-submit]");
              if (recaptchaButton) {
                recaptchaButton.click();
              } else {
                showStatus(form, "danger", "reCAPTCHA submit button is not configured.");
              }
            }
            return;
          }

          syncMessageField(form);
          trackSubmit(form, "native-endpoint");
          return;
        }

        event.preventDefault();

        if (!form.checkValidity()) {
          form.reportValidity();
          return;
        }

        if (endpoint) {
          syncMessageField(form);
          handleEndpointSubmit(form, endpoint, new FormData(form));
          return;
        }

        if (recipientEmail) {
          handleEmailFallback(form, recipientEmail);
          return;
        }

        if (linkedinUrl) {
          handleLinkedInFallback(form, linkedinUrl);
          return;
        }

        showStatus(form, "danger", "Question delivery is not configured yet.");
      });
    });
  });
})();
