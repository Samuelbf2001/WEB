import { useEffect } from "react";
import { translateCopy } from "./dictionary";
import { useLocale } from "./LocaleContext";

const originalText = new WeakMap<Text, string>();
const translatedAttributes = ["aria-label", "alt", "placeholder", "title"] as const;
const excludedSelector = [
  ".notranslate",
  "[translate='no']",
  "#google_translate_element",
  "script",
  "style",
  "noscript",
  "textarea",
  "input",
  "select",
  "option",
  "code",
  "pre",
  "svg",
].join(",");

const shouldSkip = (node: Node) => {
  const element = node.nodeType === Node.ELEMENT_NODE ? (node as Element) : node.parentElement;
  return Boolean(element?.closest(excludedSelector));
};

const clearLegacyGoogleTranslate = () => {
  document.cookie = "googtrans=; path=/; max-age=0; SameSite=Lax";
  document.cookie = `googtrans=; path=/; domain=${window.location.hostname}; max-age=0; SameSite=Lax`;
  document.documentElement.classList.remove("translated-ltr", "translated-rtl");
  document.body.style.top = "";
  document.getElementById("sixteam-google-translate")?.remove();
  document.getElementById("google_translate_element")?.remove();
  document.querySelectorAll(".skiptranslate").forEach((element) => element.remove());
};

const translateTextNode = (node: Text, locale: "es" | "en") => {
  if (shouldSkip(node) || !node.data.trim()) return;

  if (!originalText.has(node)) {
    originalText.set(node, node.data);
  }

  const original = originalText.get(node) ?? node.data;
  const next = translateCopy(original, locale);
  if (node.data !== next) {
    node.data = next;
  }
};

const translateAttributes = (element: Element, locale: "es" | "en") => {
  if (shouldSkip(element)) return;

  translatedAttributes.forEach((attr) => {
    const value = element.getAttribute(attr);
    if (!value?.trim()) return;

    const originalAttr = `data-i18n-original-${attr}`;
    if (!element.hasAttribute(originalAttr)) {
      element.setAttribute(originalAttr, value);
    }

    const original = element.getAttribute(originalAttr) ?? value;
    const next = translateCopy(original, locale);
    if (element.getAttribute(attr) !== next) {
      element.setAttribute(attr, next);
    }
  });
};

const translateTree = (root: Node, locale: "es" | "en") => {
  if (shouldSkip(root)) return;

  if (root.nodeType === Node.TEXT_NODE) {
    translateTextNode(root as Text, locale);
    return;
  }

  if (root.nodeType === Node.ELEMENT_NODE) {
    translateAttributes(root as Element, locale);
  }

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, {
    acceptNode(node) {
      return shouldSkip(node) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
    },
  });

  let current = walker.nextNode();
  while (current) {
    if (current.nodeType === Node.TEXT_NODE) {
      translateTextNode(current as Text, locale);
    } else if (current.nodeType === Node.ELEMENT_NODE) {
      translateAttributes(current as Element, locale);
    }
    current = walker.nextNode();
  }
};

export const LocalTranslator = () => {
  const { locale } = useLocale();

  useEffect(() => {
    clearLegacyGoogleTranslate();
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;

    translateTree(document.body, locale);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "characterData") {
          translateTree(mutation.target, locale);
          return;
        }

        if (mutation.type === "attributes") {
          translateTree(mutation.target, locale);
          return;
        }

        mutation.addedNodes.forEach((node) => translateTree(node, locale));
      });
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: [...translatedAttributes],
      childList: true,
      characterData: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, [locale]);

  return null;
};

export default LocalTranslator;
