/**
 * @template T
 * @typedef {Object} Signal
 * @property {T} value
 * @property {(callback: (sig: Signal<T>) => void) => () => void} subscribe
 * @property {(cb?: (value: T) => Node) => Node} bind
 */

let activeEffect = null;

/**
 * Creates a reactive signal.
 * @template T
 * @param {T} initialValue - The initial value of the signal.
 * @returns {Signal<T>} A signal with `.value`, `.subscribe()` and `.bind()`.
 */
export function Signal(initialValue) {
  let target = initialValue;
  const subscribers = new Set();

  const proxy = new Proxy(
    { target },
    {
      get: createGetHandler(subscribers),
      set: createSetHandler(subscribers),
    },
  );

  return proxy;
}

/**
 * Creates a getter handler for the signal Proxy.
 * @param {Set<Function>} subscribers - Set of subscriber functions.
 * @returns {Function} A get handler function.
 */
function createGetHandler(subscribers) {
  return (target, prop) => {
    if (prop === "value") {
      if (activeEffect) {
        subscribers.add(activeEffect);
      }
      return target[prop];
    }

    if (prop === "subscribe") {
      return (callback) => {
        subscribers.add(callback);
        return () => {
          subscribers.delete(callback);
        };
      };
    }

    if (prop === "bind") {
      return createBindHandler(target, subscribers);
    }

    return target[prop];
  };
}

/**
 * Creates a setter handler for the signal Proxy.
 * @param {Set<Function>} subscribers - Set of subscriber functions.
 * @returns {Function} A set handler function.
 */
function createSetHandler(subscribers) {
  return (target, prop, newValue) => {
    if (prop === "value") {
      target[prop] = newValue;
      subscribers.forEach((callback) => callback(target));
      return true;
    }
    return false;
  };
}

/**
 * Binds the signal to a text node or custom DOM element.
 * @param {Object} target - The signal object.
 * @param {Set} subscribers - Set of subscriber functions.
 * @returns {Function} A function that creates a bound node.
 */
function createBindHandler(target, subscribers) {
  return (cb) => {
    if (typeof cb === "function") {
      let element = cb(target.value);
      subscribers.add(() => {
        const newEl = cb(target.value);
        if (element.parentNode) {
          element.parentNode.replaceChild(newEl, element);
        }
        element = newEl;
      });
      return element;
    } else {
      const textNode = document.createTextNode(String(target.value));
      subscribers.add(() => {
        textNode.nodeValue = String(target.value);
      });
      return textNode;
    }
  };
}
