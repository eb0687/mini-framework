---
sidebar_position: 1
---

# Intro

This mini framework helps you build web applications with ease by providing simple tools for:

- Creating and updating DOM elements
- Handling navigation with a routing system
- Managing app state with reactive signals
- Responding to user actions through custom event handling

This document serves as a basic guide on how to utilize the framework to build
simple SPA web apps with reactivity.

## Folder structure

```sh
.
├── docs
│   ├── blog
│   ├── docs
│   ├── src
│   └── static
├── framework               <---- framework lives here, duh...
├── public
└── src                     <---- apps go here
    ├── basic-button
    ├── basic-counter
    ├── basic-text
    ├── subscribe-example
    └── todomvc

```

## Before getting started

Some initial setup is required before creating your app.

- From the root of your project, navigate to the `src` folder.
- Duplicate the `_template` folder. This folder contains a basic setup to kickstart your app.
- Rename the duplicated folder. Choose a name that reflects the purpose of your app — for example, `my-counter-app`.
- Navigate to the root of the project directory and update the `index.html` to
  point to your app

```html
<body>
  <div id="app"></div>
  <!-- update this to point to your app -->
  <script type="module" src="/src/my-counter-app/main.js"></script>
</body>
```

:::warning
If you forget this step the app will not work
:::

- Register your routes here

```js
window.routes = {
  "/": page,
  "/404": pageNotFound,
};

router();
```

:::warning
Ensure that a 404 route exists or else the app will not work
:::

- You’re all set! Check out the rest of the documentation for examples and guidance on using the different features of the framework.
