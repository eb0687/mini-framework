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
