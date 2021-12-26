import { countStore } from "../store/main.js";
import { append, listener, setAttribute, createElement, setTextContent } from "../dom/utils.js";

export default function countButtons(containerApp) {
  const countWrapper = createElement("div");
  setAttribute(countWrapper, "class", "count-wrapper");

  const incrementBtn = createElement("button");
  setTextContent(incrementBtn, "Increment");
  setAttribute(incrementBtn, "class", "button");

  const decrementBtn = createElement("button");
  setTextContent(decrementBtn, "Decrement");
  setAttribute(decrementBtn, "class", "button");

  const countContent = createElement("h1");
  setTextContent(countContent, countStore.getState());
  setAttribute(countContent, "id", "count-content");

  listener(incrementBtn, "click", () => {
    countStore.dispath({ type: "INCREMENT", defaultValue: 1 });
  });

  listener(decrementBtn, "click", () => {
    countStore.dispath({ type: "DECREMENT", defaultValue: 1 });
  });

  countStore.subscribe(() => {
    setTextContent(countContent, countStore.getState());
  });

  append(countWrapper, incrementBtn);
  append(countWrapper, countContent);
  append(countWrapper, decrementBtn);
  append(containerApp, countWrapper);
}
