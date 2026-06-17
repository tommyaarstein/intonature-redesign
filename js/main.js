const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector("#mobile-menu");
const languageToggle = document.querySelector(".language-toggle");
const languageCurrent = document.querySelector(".language-toggle-current");
const languageNext = document.querySelector(".language-toggle-next");

const LANGUAGE_STORAGE_KEY = "intoNatureLanguage";
let languageLabelTimeout;
let languageFadeTimeout;

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

setLanguage(getStoredLanguage() || "en");
