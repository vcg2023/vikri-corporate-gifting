/* ==========================================================================
   VIKRI — site behaviour
   ========================================================================== */

/* =========================================================================
   SINGLE SOURCE OF TRUTH — every WhatsApp button and the enquiry form on
   every page reads from this one object. Never hard-code a WhatsApp number
   or form endpoint anywhere else in the site; edit only the values below.
   ========================================================================= */
window.VIKRI_CONFIG = {
  whatsappNumber: "917903422602", // +91 79034 22602, digits only with country code

  whatsappMessage: "Hello Vikri, I am interested in customized gifting solutions. I would like to discuss my requirement.",

  // FormSubmit.co — a free, no-signup form-relay service: it POSTs the
  // enquiry form's fields straight to contact@vikri.co.in. One-time step
  // required: the FIRST submission sent through this endpoint triggers an
  // activation email from FormSubmit to contact@vikri.co.in — someone needs
  // to open that email and click the confirmation link once, or every
  // submission before that click is silently dropped rather than delivered.
  enquiryFormEndpoint: "https://formsubmit.co/ajax/contact@vikri.co.in",

  phone: "+91 79034 22602",
  email: "contact@vikri.co.in",
  ga4Id: "",          // OPTIONAL — G-XXXXXXXXXX, also uncomment the gtag snippet in <head>
  gscVerification: "" // OPTIONAL — Google Search Console meta content value
};

document.addEventListener("DOMContentLoaded", function () {
  /* mobile nav toggle */
  var toggle = document.querySelector(".menu-toggle");
  var navLinks = document.querySelector(".nav-links");
  if (toggle && navLinks) {
    toggle.addEventListener("click", function () {
      navLinks.classList.toggle("is-open");
      toggle.setAttribute(
        "aria-expanded",
        navLinks.classList.contains("is-open") ? "true" : "false"
      );
    });
  }

  /* mobile dropdown (Occasions) opens on tap instead of hover */
  document.querySelectorAll(".has-dropdown > a").forEach(function (link) {
    link.addEventListener("click", function (e) {
      if (window.innerWidth <= 920) {
        e.preventDefault();
        link.parentElement.classList.toggle("is-open");
      }
    });
  });

  /* wire up every WhatsApp link/button from config */
  var waHref =
    "https://wa.me/" +
    window.VIKRI_CONFIG.whatsappNumber +
    "?text=" +
    encodeURIComponent(window.VIKRI_CONFIG.whatsappMessage);
  document.querySelectorAll("[data-wa-link]").forEach(function (el) {
    el.setAttribute("href", waHref);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });

  /* enquiry form: posts to configured endpoint if present, otherwise
     shows the thank-you state in demo mode so the flow can be reviewed
     before a backend is connected. */
  /* show the on-page "form isn't wired up yet" notice only while the
     endpoint is actually blank — remove itself automatically once
     enquiryFormEndpoint is configured */
  var demoNote = document.getElementById("form-demo-note");
  if (demoNote && !window.VIKRI_CONFIG.enquiryFormEndpoint) {
    demoNote.hidden = false;
  }

  /* populate the contact page's phone/email from config once real values
     are added, without needing an HTML edit */
  var phoneEl = document.getElementById("c-phone");
  if (phoneEl && window.VIKRI_CONFIG.phone) {
    phoneEl.textContent = window.VIKRI_CONFIG.phone;
  }
  var emailEl = document.getElementById("c-email");
  if (emailEl && window.VIKRI_CONFIG.email) {
    emailEl.textContent = window.VIKRI_CONFIG.email;
  }

  var form = document.getElementById("enquiry-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var endpoint = window.VIKRI_CONFIG.enquiryFormEndpoint;
      var statusEl = document.getElementById("enquiry-status");
      var showThanks = function () {
        form.hidden = true;
        if (statusEl) {
          statusEl.hidden = false;
          statusEl.focus();
        }
        if (window.gtag) {
          window.gtag("event", "quote_form_submit");
        }
      };
      if (!endpoint) {
        // Demo mode — no endpoint configured yet.
        showThanks();
        return;
      }
      fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form)
      })
        .then(function (res) {
          if (res.ok) {
            showThanks();
          } else {
            alert("Something went wrong. Please try again or WhatsApp us directly.");
          }
        })
        .catch(function () {
          alert("Something went wrong. Please try again or WhatsApp us directly.");
        });
    });
  }

  /* track outbound click events (WhatsApp / phone / catalogue) — fires only
     if GA4 is configured and gtag is loaded. */
  document.querySelectorAll("[data-track]").forEach(function (el) {
    el.addEventListener("click", function () {
      if (window.gtag) {
        window.gtag("event", el.getAttribute("data-track"));
      }
    });
  });
});
