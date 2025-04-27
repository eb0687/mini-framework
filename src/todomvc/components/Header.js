import { div, h1, h3 } from "../../../framework";
import { todos } from "../main";
import { TodoInput } from "./TodoInput";

export function Header() {
  const todoCount = todos.bind((list) => {
    const remainingTodos = list.filter((todo) => !todo.completed).length;
    return h3({ class: "todo-count" }, `Remaining: ${remainingTodos}`);
  });

  todos.subscribe(() => {
    todoCount.textContent = `total: ${todos.value.length}`;
  });

  return div({ class: "header" }, h1({}, "Todos"), todoCount, TodoInput());
}
