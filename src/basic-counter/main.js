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
