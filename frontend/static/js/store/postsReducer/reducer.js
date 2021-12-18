export default function reducer(state = 0, action) {
  switch (action.type) {
    case "FETCHING":
      state = action.defaultValue;
      return state;

    default:
      return state;
  }
}
