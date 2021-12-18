import { countStore } from "../store/main.js";
import {
  append,
  listener,
  setAttribute,
  createElement,
  setTextContent,
} from "../dom/utils.js";

export default function buttonComponent(type, containerApp) {
  const button = createElement("button");

  setAttribute(button, "class", "button");

  if (type === "increment") {
    setTextContent(button, "Increment");

    listener(button, "click", () => {
      countStore.dispath({ type: "INCREMENT", defaultValue: 1 });
    });
  }

  if (type === "decrement") {
    setTextContent(button, "Decrement");

    listener(button, "click", () => {
      countStore.dispath({ type: "DECREMENT", defaultValue: 1 });
    });
  }

  append(containerApp, button);
}
