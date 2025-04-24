---
sidebar_position: 4
---

# Reactivity

This module implements a lightweight reactivity system similar to what you'd find in frameworks like SolidJS, Vue’s, REACT reactivity core.

## Signal

The Signal function lets you create a reactive value. That means when the value changes,
anything that depends on it can update automatically — like parts of your web page.
Think of it like a smart variable that knows when it changes, and tells others.

### What It Does

- You get an object with a .value that you can get or set.
- You can subscribe to changes — run a function every time the value changes.
- You can bind it to the DOM — so the page updates when the value changes.

### Usage

1. Basic usage

```js
const count = Signal(0); // initialize count as 0
console.log(count); // 0
count.value = 5; // update the value
console.log(count.value); // 5
```

---

2. Subscribe to changes

```js
const name = Signal("Alice");

name.subscribe((sig) => {
  console.log("Name is now", sig.value);
});

name.value = "Bob"; // Logs: Name is now Bob
```

---

3. Binding to the DOM

- Bind a signal to a text node

```js
import { div, Signal } from "../../framework";
import { router } from "../../framework/router";

const greeting = Signal("Hello World!");
const greetingDisplay = greeting.bind((v) => div({}, `${v}`));

setTimeout(() => {
  greeting.value = "Hello Universe!";
}, 2000);

const page = div({ class: "app" }, greetingDisplay);

const pageNotFound = div({ class: "not-found" }, "Page Not Found");

window.routes = {
  "/": page,
  "/404": pageNotFound,
};
router();
```

Bind a signal with a custom element callback

```js
import { div, Signal } from "../../framework";
import { router } from "../../framework/router";

const counter = Signal(0);
const counterDisplay = counter.bind((value) => div({}, `Count: ${value}`));

setInterval(() => {
  counter.value++;
}, 2000);

const pageNotFound = div({ class: "not-found" }, "Page Not Found");

window.routes = {
  "/": counterDisplay,
  "/404": pageNotFound,
};

router();
```

:::note
Use .bind() when:

- You want to keep DOM in sync with signal changes
- You want to create auto-updating UI nodes (like counters, input display, etc.)

Avoid it for:

- Complex component trees (manual .subscribe() might be better)
- Cases where you need transition animations or conditional logic
  :::
