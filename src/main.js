import { elements } from "../framework/index.js";
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

const { div, button } = elements;
const todoApp = App();

const pageNotFound = div({}, "Page Not Found", link("/hello", "Take me home"));

// NOTE: this makes it globally accessbile
window.routes = {
  "/home": todoApp,
  "/404": pageNotFound,
};

router();
