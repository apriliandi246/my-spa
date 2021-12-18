import countButtons from "../components/count-buttons.js";
import {
  append,
  setTitle,
  setAttribute,
  createElement,
  setTextContent,
} from "../dom/utils.js";

export default function dashboardPageContent(containerApp) {
  setTitle("Dashboard");

  countButtons(containerApp);

  const headingOne = createElement("h1");
  setTextContent(headingOne, "Welcome Back");

  const paragraph = createElement("p");
  setTextContent(paragraph, "You are viewing the dashboard!");

  const anchorTag = createElement("a");
  setTextContent(anchorTag, "View recent Posts");
  setAttribute(anchorTag, "href", "/posts");
  setAttribute(anchorTag, "data-link", "");

  append(containerApp, headingOne);
  append(containerApp, paragraph);
  append(containerApp, anchorTag);
}
