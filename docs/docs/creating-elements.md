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

---

### **Example**

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

document.body.appendChild(button);
```

---

### **Behavior**

- Attributes starting with `"on"` are treated as event listeners and bound using `addEventListener`.
- All other properties are treated as HTML attributes.
- Child strings are turned into text nodes.
- DOM `Node` objects are appended directly.

---
