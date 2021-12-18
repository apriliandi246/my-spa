import {
  append,
  setTitle,
  setAttribute,
  createElement,
  setTextContent,
} from "../dom/utils.js";

export default function notFoundPageContent(containerApp) {
  setTitle("404 - Not Found");

  const headingOne = createElement("h1");
  setTextContent(headingOne, "404");

  const paragraph = createElement("p");
  setTextContent(paragraph, "Page not found");

  const anchorTag = createElement("a");
  setTextContent(anchorTag, "Back to dashboard");
  setAttribute(anchorTag, "href", "/");
  setAttribute(anchorTag, "data-link", "");

  append(containerApp, headingOne);
  append(containerApp, paragraph);
  append(containerApp, anchorTag);
}
