import { button, div, Signal } from "../../framework";
import { router } from "../../framework/router";

const counter = Signal(0);
const counterDisplay = counter.bind((value) => div({}, `Count: ${value}`));

const incrementButton = button(
  { class: "btn", onClick: () => counter.value++ },
  "Click me",
);

const page = div({ class: "app" }, counterDisplay, incrementButton);

const pageNotFound = div({ class: "not-found" }, "Page Not Found");

window.routes = {
  "/": page,
  "/404": pageNotFound,
};
router();
