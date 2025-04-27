import { div, p } from "../../../framework";
import { todos } from "../main";
import { TodoInput } from "./TodoInput";

export function Header() {
  const todoCount = todos.bind((list) => {
    const remainingTodos = list.filter((todo) => !todo.completed).length;
    return p({ class: "todo-count" }, `remaining items: ${remainingTodos}`);
  });

  todos.subscribe(() => {
    todoCount.textContent = `total: ${todos.value.length}`;
  });

  return div(
    { class: "header" },
    p({ class: "header-title" }, "todos"),
    todoCount,
    TodoInput(),
  );
}
