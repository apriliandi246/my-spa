import buttonComponent from "../components/button.js";
import countButtons from "../components/count-buttons.js";
import { append, remove, setTitle, createElement, setTextContent } from "../dom/utils.js";

export default function usersPageContent(containerApp) {
  setTitle("Users");

  countButtons(containerApp);

  const headingOne = createElement("h1");
  setTextContent(headingOne, "Users");

  const paragraph = createElement("p");
  setTextContent(paragraph, "Manage your users.");

  const loadingIndicator = createElement("h2");
  setTextContent(loadingIndicator, "Loading....");

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => {
      const lists = createElement("ul");

      for (let index = 0; index < users.length; index++) {
        const list = createElement("li");
        setTextContent(list, users[index].name);
        lists.appendChild(list);
      }

      setTimeout(() => {
        remove(loadingIndicator);
        append(containerApp, lists);
      }, 800);
    });

  append(containerApp, headingOne);
  append(containerApp, paragraph);
  buttonComponent("increment", containerApp);
  append(containerApp, loadingIndicator);
}
