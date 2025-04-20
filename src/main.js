import { elements } from "../framework/index.js";
import { link, router } from "../framework/router.js";

const { div, button } = elements;

const hello = div(
  {},
  button({ onClick: () => console.log("clicked"), class: "btn" }, "clickMe"),
  button({ onClick: () => console.log("clicked") }, "clickMe"),
  link("/404", "nnnnnn"),
);

const pageNotFound = div(
  {},
  "Page Not Found",
  link("/hello", "Take me homeeee"),
);

// NOTE: this makes it globally accessbile
window.routes = {
  "/hello": hello,
  "/404": pageNotFound,
};

// NOTE: without this the app wont know where to route
router();
