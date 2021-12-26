import { postsStore } from "../store/main.js";
import buttonComponent from "../components/button.js";
import countButtons from "../components/count-buttons.js";
import { append, remove, setTitle, createElement, setTextContent } from "../dom/utils.js";

export default function postsPageContent(containerApp) {
  setTitle("Posts");

  countButtons(containerApp);

  const headingOne = createElement("h1");
  setTextContent(headingOne, "Posts");

  const paragraph = createElement("p");
  setTextContent(paragraph, "You are viewing the posts!");

  const loadingIndicator = createElement("h2");
  setTextContent(loadingIndicator, "Loading....");

  const lists = createElement("ul");

  if (postsStore.getState() === 0) {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) => {
        postsStore.dispath({ type: "FETCHING", defaultValue: posts });

        for (let index = 0; index < posts.length; index++) {
          const list = createElement("li");
          setTextContent(list, posts[index].title);
          append(lists, list);
        }

        setTimeout(() => {
          remove(loadingIndicator);
          append(containerApp, lists);
        }, 800);
      });
  }

  if (postsStore.getState() !== 0) {
    const posts = postsStore.getState();

    for (let index = 0; index < posts.length; index++) {
      const list = createElement("li");
      setTextContent(list, `${posts[index].title} - ${posts[index].id}`);
      append(lists, list);
    }
  }

  append(containerApp, headingOne);
  append(containerApp, paragraph);

  buttonComponent("increment", containerApp);

  if (postsStore.getState() === 0) {
    append(containerApp, loadingIndicator);
  }

  if (postsStore.getState() !== 0) {
    append(containerApp, lists);
  }
}
