import { div, h1, h3 } from "../../framework";
import { todos } from "../main";
import { TodoInput } from "./TodoInput";

export function Header() {
  // const todoCount = h3({ class: "todo-count" }, `Total: ${todos.value.length}`);
  const todoCount = todos.bind((list) =>
    h3({ class: "todo-count" }, `Total: ${list.length}`),
  );

  todos.subscribe(() => {
    todoCount.textContent = `total: ${todos.value.length}`;
  });

  return div({ class: "header" }, h1({}, "Todos"), todoCount, TodoInput());
}
