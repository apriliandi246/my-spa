import createStore from "./store/store.js";
import postsReducer from "./postsReducer/reducer.js";
import countReducer from "./countReducer/reducer.js";

export const countStore = createStore(countReducer);
export const postsStore = createStore(postsReducer);
