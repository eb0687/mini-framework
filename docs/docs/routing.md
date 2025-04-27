---
sidebar_position: 3
---

# Routing

This module provides a minimal client-side router for use in single-page applications (SPAs).
It allows defining route handlers, navigating programmatically, and creating link elements
that update both the URL and the app’s state based on user actions, enabling smooth navigation
without reloading the page.

---

## router()

Initializes the router by checking the current path (window.location.pathname) and rendering the associated page into the app element.

```js
import { router } from "../framework/router";

router();
```

:::warning
This must be called at the end of your `index.js` to function correctly.
:::

---

## link(href, ...children)

### **Parameters**

- **`href`** (`string`)  
  The route defined in the window.route
  Example: "/home", "/404"

- **`...children`** (`string | Node`)
  Any number of child elements to append to the created element.
  - Strings are converted to text nodes.
  - Nodes are appended directly.

A custom link element that, when clicked, calls navigate(path) instead of triggering a full page reload.

:::note
Why not use a regular a tag?

The browser would reload the page and make a new request to the server.
In an SPA, you want to stay on the same page and just swap the content dynamically.
Behind the scenes link calls on a custom function navigate() which
handles this for us.
:::

```js
import { link } from "../framework/router";

const aboutPage = link("/about", "About");
```

---

## Example usage

```js
// index.js
import { div, h1, li, ul } from "../../framework";
import { link, router } from "../../framework/router";
import "./styles.css";

const homePage = div(
  { class: "page" },
  h1({}, "Welcome to the home page"),
  ul(
    {},
    li({ class: "list-item" }, link("/about", "About Page")),
    li({ class: "list-item" }, link("/other", "Another Page")),
  ),
);

const aboutPage = div(
  { class: "page" },
  h1({}, "Welcome to the about page"),
  ul({}, li({ class: "list-item" }, link("/", "Home"))),
);

const otherPage = div(
  { class: "page" },
  h1({}, "Welcome to yet another page"),
  ul({}, li({ class: "list-item" }, link("/", "Home"))),
);

const pageNotFound = div(
  { class: "page" },
  h1({}, "Page Not Found"),
  ul({}, li({ class: "list-item" }, link("/", "Home"))),
);

window.routes = {
  "/": homePage,
  "/about": aboutPage,
  "/other": otherPage,
  "/404": pageNotFound,
};

router();
```

:::warning

- Ensure that the window.routes is defined or the app will not work
- Ensure that a 404 route exists or else the app will not work
  :::
