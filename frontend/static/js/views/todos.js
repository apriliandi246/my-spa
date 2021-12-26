import useState from "../lib/useState.js";
import {
  append,
  setTitle,
  listener,
  setAttribute,
  createElement,
  setTextContent,
} from "../dom/utils.js";

export default function todosContent(containerApp) {
  const [todos, setTodos] = useState([]);

  setTitle("Todos");

  const headingOne = createElement("h1");
  setTextContent(headingOne, `Todos : ${todos().length}`);

  const form = createElement("form");
  const input = createElement("input");
  const btn = createElement("button");
  const list = createElement("ul");

  input.placeholder = "Todo....";
  setTextContent(btn, "Submit");
  setAttribute(btn, "type", "submit");

  listener(form, "submit", (event) => {
    event.preventDefault();

    const inputValue = input.value.trim();

    if (!inputValue) {
      alert("Type some shit....");
    } else {
      const listItem = createElement("li");
      setTodos([...todos(), inputValue]);

      setTextContent(listItem, todos()[todos().length - 1]);
      append(list, listItem);
      setTextContent(headingOne, `Todos : ${todos().length}`);

      input.value = "";
      input.focus();
    }
  });

  append(containerApp, headingOne);
  append(form, input);
  append(form, btn);
  append(containerApp, form);
  append(containerApp, list);
}
