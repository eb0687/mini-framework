import { create } from "./element";

export function router() {
  if (!window.routes) {
    console.error(
      "No routes found. Please define window.routes before using the router.",
    );
    return;
  }

  const path = window.location.pathname;
  console.log("path", path);

  const page = window.routes[path] || window.routes["/404"];

  const app = document.getElementById("app");
  app.innerHTML = "";

  if (!page) {
    console.error(`No route found for path: ${path}`);
    return;
  }

  app.appendChild(page);
}

export function navigate(path) {
  window.history.pushState({}, "", path);
  router();
}

export function link(href, ...children) {
  return create(
    "pathLink",
    { class: "custom-link", onClick: () => navigate(href) },
    ...children,
  );
}

window.addEventListener("popstate", router);
