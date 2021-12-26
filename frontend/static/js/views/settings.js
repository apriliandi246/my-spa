import buttonComponent from "../components/button.js";
import countButtons from "../components/count-buttons.js";
import { append, setTitle, createElement, setTextContent } from "../dom/utils.js";

export default function settingsPageContent(containerApp) {
  setTitle("Settings");

  countButtons(containerApp);

  const headingOne = createElement("h1");
  setTextContent(headingOne, "Settings");

  const paragraph = createElement("p");
  setTextContent(paragraph, "Manage your privacy and configuration.");

  append(containerApp, headingOne);
  append(containerApp, paragraph);

  buttonComponent("decrement", containerApp);
}
