---
sidebar_position: 3
---

# Routing

This module provides a minimal client-side router for single-page applications (SPAs).
It allows defining route handlers, navigating programmatically, and creating link
elements that update the browser's history without a full page reload.

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

## link(href: string, ...children: HTMLElement[])

A custom link element that, when clicked, calls navigate(path) instead of triggering a full page reload.

:::note
Why not use a regular a tag?

The browser would reload the page and make a new request to the server.
In an SPA, you want to stay on the same page and just swap the content dynamically. Behind the scenes link calls on a custom function navigate() which
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
import { router, link } from "./router";
import { create } from "./element";

const homePage = create(
  "div",
  {},
  create("h1", {}, "Home"),
  link("/about", document.createTextNode("Go to About")),
);

const aboutPage = create(
  "div",
  {},
  create("h1", {}, "About"),
  link("/", document.createTextNode("Back to Home")),
);

window.routes = {
  "/": homePage,
  "/about": aboutPage,
  "/404": create("div", {}, "Not Found"),
};

router();
```
