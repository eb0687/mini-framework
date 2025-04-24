import { div, p, Signal } from "../../framework";
import { router } from "../../framework/router";

const name = Signal("Alice");

name.subscribe((newName) => {
  console.log("Name changed to:", newName.value);
});

name.value = "Bob";

const newName = p({ class: "name" }, `My name is: ${name.value}`);

const page = div({ class: "app" }, newName);

const pageNotFound = div({ class: "not-found" }, "Page Not Found");

window.routes = {
  "/": page,
  "/404": pageNotFound,
};
router();
