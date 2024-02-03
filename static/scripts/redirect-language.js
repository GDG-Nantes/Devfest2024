const forcedLanguage = localStorage.getItem("forcedLanguage");
const current = /\/en(\/.*)?/.test(window.location.pathname) ? "en" : "fr";
const navLocale =
  forcedLanguage ||
  (navigator.language.substring(0, 2).toLocaleLowerCase() !== "fr"
    ? "en"
    : "fr");
if (current === "fr" && navLocale === "en") {
  window.location.pathname = "/en" + window.location.pathname;
}
