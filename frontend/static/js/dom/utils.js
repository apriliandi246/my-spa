export function listener(node, event, handler) {
  node.addEventListener(event, handler);
  return () => node.removeEventListener(event, handler);
}

export function createElement(element) {
  return document.createElement(element);
}

export function setAttribute(node, attribute, value) {
  node.setAttribute(attribute, value);
}

export function setTextContent(node, value) {
  node.textContent = value;
}

export function setTitle(value) {
  document.title = value;
}

export function append(container, node) {
  container.appendChild(node);
}

export function appendBefore(container, node, anchor) {
  container.insertBefore(node, anchor || null);
}

export function remove(node) {
  node.remove();
}
