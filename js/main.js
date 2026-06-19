const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector("#mobile-menu");
const languageToggle = document.querySelector(".language-toggle");
const languageCurrent = document.querySelector(".language-toggle-current");
const languageNext = document.querySelector(".language-toggle-next");
const legalModalLinks = document.querySelectorAll(
  'a[href="terms-and-conditions.html"], a[href="privacy.html"]'
);

const LANGUAGE_STORAGE_KEY = "intoNatureLanguage";
const legalContentCache = new Map();
let languageLabelTimeout;
let languageFadeTimeout;
let lastFocusedElement;

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

setLanguage(getStoredLanguage() || "en");
