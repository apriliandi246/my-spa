export default function useState(defaultValue) {
  let value = defaultValue;

  function state() {
    return value;
  }

  function setState(newValue) {
    value = newValue;
  }

  return [state, setState];
}
