import { div } from "../framework/index.js";
import { link, router } from "../framework/router.js";
import { App } from "./components/App.js";
import { Signal } from "../framework";
import "./style.css";

export const todos = Signal([
  { id: 1, title: "Learn JavaScript", completed: false },
  { id: 2, title: "Build a mini framework", completed: false },
  { id: 3, title: "Create TodoMVC", completed: false },
]);

export const filter = Signal("all");

const todoApp = App();

const pageNotFound = div(
  { class: "not-found" },
  "Page Not Found",
  link("/", "Take me home"),
);

// NOTE: this makes it globally accessbile
window.routes = {
  "/": todoApp,
  "/404": pageNotFound,
};

router();
