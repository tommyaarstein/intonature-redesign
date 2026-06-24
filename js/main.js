const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector("#mobile-menu");
const languageToggle = document.querySelector(".language-toggle");
const languageCurrent = document.querySelector(".language-toggle-current");
const languageNext = document.querySelector(".language-toggle-next");
const legalModalLinks = document.querySelectorAll(
  'a[href="terms-and-conditions.html"], a[href="privacy.html"]'
);
const countryOptions = document.querySelector("#country-options");
const contactForm = document.querySelector("[data-contact-form]");
const countryInput = contactForm?.querySelector('input[name="country"]');
const messageField = contactForm?.querySelector('textarea[name="message"]');
const messageCount = document.querySelector("[data-message-count]");
const formStatus = document.querySelector("[data-form-status]");

const LANGUAGE_STORAGE_KEY = "intoNatureLanguage";
const legalContentCache = new Map();
let languageLabelTimeout;
let languageFadeTimeout;
let lastFocusedElement;
let availableCountries = [];

const getStoredLanguage = () => {
  try {
    return localStorage.getItem(LANGUAGE_STORAGE_KEY);
  } catch {
    return null;
  }
};

const storeLanguage = (language) => {
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch {
    // Language switching still works for the current page if storage is unavailable.
  }
};

const updateLanguageLabels = (isFrench) => {
  if (languageCurrent && languageNext) {
    languageCurrent.textContent = isFrench ? "EN" : "English";
    languageNext.textContent = isFrench ? "français" : "FR";
  }
};

const getRegionCodes = () => {
  try {
    if (Intl.supportedValuesOf) {
      return Intl.supportedValuesOf("region").filter((code) => /^[A-Z]{2}$/.test(code));
    }
  } catch {
    // Some browsers do not support "region" in Intl.supportedValuesOf yet.
  }

  return [
    "AF", "AX", "AL", "DZ", "AS", "AD", "AO", "AI", "AQ", "AG", "AR", "AM", "AW", "AU", "AT", "AZ",
    "BS", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BQ", "BA", "BW", "BV", "BR",
    "IO", "BN", "BG", "BF", "BI", "CV", "KH", "CM", "CA", "KY", "CF", "TD", "CL", "CN", "CX", "CC",
    "CO", "KM", "CG", "CD", "CK", "CR", "CI", "HR", "CU", "CW", "CY", "CZ", "DK", "DJ", "DM", "DO",
    "EC", "EG", "SV", "GQ", "ER", "EE", "SZ", "ET", "FK", "FO", "FJ", "FI", "FR", "GF", "PF", "TF",
    "GA", "GM", "GE", "DE", "GH", "GI", "GR", "GL", "GD", "GP", "GU", "GT", "GG", "GN", "GW", "GY",
    "HT", "HM", "VA", "HN", "HK", "HU", "IS", "IN", "ID", "IR", "IQ", "IE", "IM", "IL", "IT", "JM",
    "JP", "JE", "JO", "KZ", "KE", "KI", "KP", "KR", "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY",
    "LI", "LT", "LU", "MO", "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MQ", "MR", "MU", "YT", "MX",
    "FM", "MD", "MC", "MN", "ME", "MS", "MA", "MZ", "MM", "NA", "NR", "NP", "NL", "NC", "NZ", "NI",
    "NE", "NG", "NU", "NF", "MK", "MP", "NO", "OM", "PK", "PW", "PS", "PA", "PG", "PY", "PE", "PH",
    "PN", "PL", "PT", "PR", "QA", "RE", "RO", "RU", "RW", "BL", "SH", "KN", "LC", "MF", "PM", "VC",
    "WS", "SM", "ST", "SA", "SN", "RS", "SC", "SL", "SG", "SX", "SK", "SI", "SB", "SO", "ZA", "GS",
    "SS", "ES", "LK", "SD", "SR", "SJ", "SE", "CH", "SY", "TW", "TJ", "TZ", "TH", "TL", "TG", "TK",
    "TO", "TT", "TN", "TR", "TM", "TC", "TV", "UG", "UA", "AE", "GB", "US", "UM", "UY", "UZ", "VU",
    "VE", "VN", "VG", "VI", "WF", "EH", "YE", "ZM", "ZW",
  ];
};

const populateCountryOptions = (language = "en") => {
  if (!countryOptions || !Intl.DisplayNames) return;

  const displayNames = new Intl.DisplayNames([language], { type: "region" });
  const countries = getRegionCodes()
    .map((code) => displayNames.of(code))
    .filter(Boolean);

  countries.push("Kosovo");

  const uniqueCountries = [...new Set(countries)]
    .sort((a, b) => a.localeCompare(b, language, { sensitivity: "base" }));

  availableCountries = uniqueCountries;
  renderCountryOptions(countryInput?.value || "");
};

const hideCountryOptions = () => {
  countryOptions?.setAttribute("hidden", "");
  countryInput?.setAttribute("aria-expanded", "false");
};

const showCountryOptions = () => {
  if (!countryOptions) return;

  countryOptions.removeAttribute("hidden");
  countryInput?.setAttribute("aria-expanded", "true");
};

const renderCountryOptions = (query = "") => {
  if (!countryOptions) return;

  const normalizedQuery = query.trim().toLocaleLowerCase();
  const filteredCountries = normalizedQuery
    ? [
        ...availableCountries.filter((country) =>
          country.toLocaleLowerCase().startsWith(normalizedQuery)
        ),
        ...availableCountries.filter((country) => {
          const normalizedCountry = country.toLocaleLowerCase();
          return (
            !normalizedCountry.startsWith(normalizedQuery) &&
            normalizedCountry.includes(normalizedQuery)
          );
        }),
      ]
    : availableCountries;

  if (filteredCountries.length === 0) {
    const empty = document.createElement("span");
    empty.className = "country-option-empty";
    empty.textContent = "No countries found";
    countryOptions.replaceChildren(empty);
    return;
  }

  countryOptions.replaceChildren(
    ...filteredCountries.map((country) => {
      const option = document.createElement("button");
      option.type = "button";
      option.setAttribute("role", "option");
      option.textContent = country;
      option.addEventListener("mousedown", (event) => {
        event.preventDefault();
      });
      option.addEventListener("click", () => {
        if (countryInput) {
          countryInput.value = country;
        }
        hideCountryOptions();
      });
      return option;
    })
  );
};

const setLanguage = (language, options = {}) => {
  const activeLanguage = language === "fr" ? "fr" : "en";
  const isFrench = activeLanguage === "fr";
  const animate = options.animate === true;

  window.IntoNatureLanguages?.applyLanguage(activeLanguage);
  clearTimeout(languageLabelTimeout);
  clearTimeout(languageFadeTimeout);

  if (animate) {
    languageToggle?.classList.add("is-changing");
  } else {
    updateLanguageLabels(isFrench);
  }

  languageToggle?.classList.toggle("is-fr", isFrench);
  languageToggle?.setAttribute(
    "aria-label",
    isFrench ? "Switch language to English" : "Switch language to French"
  );

  if (animate) {
    languageLabelTimeout = setTimeout(() => {
      updateLanguageLabels(isFrench);
    }, 270);

    languageFadeTimeout = setTimeout(() => {
      languageToggle?.classList.remove("is-changing");
    }, 420);
  }

  storeLanguage(activeLanguage);
  populateCountryOptions(activeLanguage);
};

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  mobileMenu?.classList.toggle("is-open", !isOpen);
});

mobileMenu?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    menuToggle?.setAttribute("aria-expanded", "false");
    mobileMenu.classList.remove("is-open");
  }
});

languageToggle?.addEventListener("click", () => {
  const nextLanguage = document.documentElement.lang === "fr" ? "en" : "fr";
  setLanguage(nextLanguage, { animate: true });
});

const scrollToHashTarget = () => {
  if (!window.location.hash) return;

  const target = document.querySelector(window.location.hash);
  target?.scrollIntoView({ block: "start" });
};

window.addEventListener("load", () => {
  setTimeout(scrollToHashTarget, 80);
  setTimeout(scrollToHashTarget, 420);
});

window.addEventListener("hashchange", () => {
  setTimeout(scrollToHashTarget, 80);
});

const getLegalModal = () => {
  let modal = document.querySelector("#legal-modal");

  if (modal) return modal;

  modal = document.createElement("dialog");
  modal.id = "legal-modal";
  modal.className = "legal-modal";
  modal.innerHTML = `
    <div class="legal-modal-shell">
      <button class="legal-modal-close" type="button" aria-label="Close legal information"></button>
      <div class="legal-modal-content" tabindex="-1"></div>
    </div>
  `;

  document.body.append(modal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeLegalModal();
    }
  });

  modal.querySelector(".legal-modal-close")?.addEventListener("click", closeLegalModal);
  modal.addEventListener("close", () => {
    document.body.classList.remove("modal-open");
    lastFocusedElement?.focus?.();
  });

  return modal;
};

const closeLegalModal = () => {
  const modal = document.querySelector("#legal-modal");

  if (modal?.open) {
    modal.close();
  }
};

const getLegalContent = async (href) => {
  if (legalContentCache.has(href)) {
    return legalContentCache.get(href);
  }

  const response = await fetch(href);

  if (!response.ok) {
    throw new Error(`Could not load ${href}`);
  }

  const html = await response.text();
  const page = new DOMParser().parseFromString(html, "text/html");
  const content = page.querySelector(".legal-content");

  if (!content) {
    throw new Error(`Missing legal content in ${href}`);
  }

  const clonedContent = content.cloneNode(true);
  legalContentCache.set(href, clonedContent);
  return clonedContent;
};

const openLegalModal = async (link) => {
  const href = link.getAttribute("href");

  if (!href) return;

  const modal = getLegalModal();
  const contentTarget = modal.querySelector(".legal-modal-content");

  lastFocusedElement = document.activeElement;
  contentTarget.innerHTML = '<p class="legal-modal-loading">Loading...</p>';
  document.body.classList.add("modal-open");
  modal.showModal();

  try {
    const content = await getLegalContent(href);
    contentTarget.replaceChildren(content.cloneNode(true));
    contentTarget.scrollTop = 0;
    contentTarget.focus();
  } catch {
    document.body.classList.remove("modal-open");
    modal.close();
    window.location.href = href;
  }
};

legalModalLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    openLegalModal(link);
  });
});

messageField?.addEventListener("input", () => {
  if (messageCount) {
    messageCount.textContent = String(messageField.value.length);
  }
});

countryInput?.addEventListener("focus", () => {
  renderCountryOptions(countryInput.value);
  showCountryOptions();
});

countryInput?.addEventListener("input", () => {
  renderCountryOptions(countryInput.value);
  showCountryOptions();
});

countryInput?.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    hideCountryOptions();
  }
});

document.addEventListener("click", (event) => {
  const target = event.target;
  if (
    target instanceof Node &&
    countryInput &&
    countryOptions &&
    !countryInput.contains(target) &&
    !countryOptions.contains(target)
  ) {
    hideCountryOptions();
  }
});

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (formStatus) {
    formStatus.textContent = document.documentElement.lang === "fr"
      ? "Le formulaire n'est pas encore connecté pendant que le site est en test. Aucun message n'a été envoyé."
      : "The form is not connected yet while the website is in testing. No message was sent.";
  }
});

setLanguage(getStoredLanguage() || "en");
