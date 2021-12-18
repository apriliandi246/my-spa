export default function reducer(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + action.defaultValue;

    case "DECREMENT":
      return state - action.defaultValue;

    default:
      return state + action.defaultValue;
  }
}
