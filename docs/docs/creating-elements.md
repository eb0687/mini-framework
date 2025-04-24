---
sidebar_position: 2
---

# Creating elements

## `create(tag, props, ...children)`

Creates and returns a new DOM element with the specified tag name, attributes, event listeners, and child nodes.

### **Parameters**

- **`tag`** (`string`)  
  The HTML tag name of the element to create.  
  _Example: `"div"`, `"button"`, `"span"`_

- **`props`** (`Object`)  
  An object containing attributes and event listeners to apply to the element.

  - Standard HTML attributes are set using `setAttribute`.
  - Event listeners are added via keys that begin with `"on"` followed by the event name.  
    _Example: `onClick`, `onMouseEnter`_

- **`...children`** (`string | Node`)  
  Any number of child elements to append to the created element.
  - Strings are converted to text nodes.
  - Nodes are appended directly.

### **Returns**

- **`HTMLElement`**
  The created DOM element with the specified properties and children.

### **Example**

Below is a simple example demonstrating how to create button element using the custom framework.

```js
import { create } from "./element.js";

const button = create(
  "button",
  {
    id: "submit-btn",
    class: "btn primary",
    onClick: () => alert("Button clicked!"),
  },
  "Submit",
);
```

:::note
This example only demonstrates how a button element is created, however to
keep things organized the use of factory exports are recommended if you want to
create your own custom elements.
:::

---

## DOM Element Factory Exports

For ease of use the framework provides a set of factory functions for commonly used HTML elements. Each factory wraps a call to a shared create function, simplifying the creation of DOM elements with props (attributes, event listeners, etc.) and children.

These element factories are designed to work with your custom UI framework and serve as JSX-like building blocks for constructing UI components in a functional style.

:::note
If for any reason an element is missing or you want to create a custom one its
as easy as navigating `./framework/index.html` file in the root of the mini-framework
project directory and adding your own custom element.

```js
export const customEl = (props, ...children) =>
  create("customEl", props, ...children);
```

:::

### Example

This is an example which renders a div with a heading, a paragraph, and a button demonstrating a JSX-like component creation workflow. All elements are created using the exported factories.

```js
import { div, h1, p, button } from "../../framework/";

export function homePage() {
  return div(
    { class: "home" },
    h1({}, "Welcome to the App"),
    p({}, "This is a paragraph."),
    button({ onClick: () => alert("Clicked!") }, "Click Me"),
  );
}
```

This component is ready for use as a child node to a parent component.

```js
import homePage from "./component/homePage";

export function App() {
  return div({ class: "app" }, homePage());
}
```

---

### **Behavior**

- Attributes starting with `"on"` are treated as event listeners and bound using `addEventListener`.
- All other properties are treated as HTML attributes.
- Child strings are turned into text nodes.
- DOM `Node` objects are appended directly.

---
