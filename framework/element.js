/**
 * Creates a new DOM element with the specified tag, properties, and children.
 *
 * @param {string} tag - The tag name of the element to create.
 * @param {Object} props - An object containing properties and attributes to set on the element.
 * @param {...(string|Node)} children - The children to append to the created element. Can be strings or DOM nodes.
 * @returns {HTMLElement} The created DOM element.
 */
export function create(tag, props, ...children) {
  const el = document.createElement(tag);
  if (!(el instanceof HTMLElement)) {
    return;
  }

  Object.entries(props).forEach(([k, v]) => {
    if (k.startsWith("on") && typeof v === "function") {
      const eventName = k.slice(2).toLowerCase();
      el.addEventListener(eventName, v);
      return;
    }

    el.setAttribute(k, v);
  });

  children.forEach((child) => {
    if (typeof child === "string") {
      el.appendChild(document.createTextNode(child));
    } else if (child instanceof Node) {
      el.appendChild(child);
    }
  });
  return el;
}
