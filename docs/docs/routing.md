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

## navigate(path: string)

Programmatically navigates to a different route and updates the DOM without reloading the page. This utilizes the javascript's pushState() method to add
to the browser's history stack.

```js
import { navigate } from "../framework/router";

navigate("/about");
```

## link(href: string, ...children: HTMLElement[])

Creates a custom link element that, when clicked, calls navigate(href) instead of triggering a full page reload.

:::note
Why not use a regular a tag?

The browser would reload the page and make a new request to the server.
In an SPA, you want to stay on the same page and just swap the content dynamically — that’s why you intercept clicks and use navigate().
:::

```js
import { link } from "../framework/router";

const aboutLink = link("/about", "About");
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
