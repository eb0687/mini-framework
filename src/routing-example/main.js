import { div, h1, li, ul } from "../../framework";
import { link, router } from "../../framework/router";
import "./styles.css";

const homePage = div(
  { class: "page" },
  h1({}, "Welcome to the home page"),
  ul(
    {},
    li({ class: "list-item" }, link("/about", "About Page")),
    li({ class: "list-item" }, link("/other", "Another Page")),
  ),
);

const aboutPage = div(
  { class: "page" },
  h1({}, "Welcome to the about page"),
  ul({}, li({ class: "list-item" }, link("/", "Home"))),
);

const otherPage = div(
  { class: "page" },
  h1({}, "Welcome to yet another page"),
  ul({}, li({ class: "list-item" }, link("/", "Home"))),
);

const pageNotFound = div(
  { class: "not-found" },
  "Page Not Found",
  link("/", "Take me home"),
);

window.routes = {
  "/": homePage,
  "/about": aboutPage,
  "/other": otherPage,
  "/404": pageNotFound,
};

router();
