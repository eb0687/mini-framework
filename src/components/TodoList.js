import { input, label, li, ul } from "../../framework";
import { filter, todos } from "../main";

function createTodoItem(todo) {
  const checkbox = input({
    class: "todo-checkbox",
    type: "checkbox",
    onChange: () => {
      todos.value = todos.value.map((t) =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t,
      );
    },
  });

  checkbox.checked = todo.completed;

  return li(
    { class: `todo-item ${todo.completed ? "completed" : ""}` },
    checkbox,
    label({}, todo.title),
  );
}

function updateList(list) {
  const currentTodos = todos.value.filter((t) => {
    if (filter.value === "active") return !t.completed;
    if (filter.value === "completed") return t.completed;
    return true;
  });
  list.replaceChildren(...currentTodos.map(createTodoItem));
}

export function TodoList() {
  const list = ul({ class: "todo-list" });
  todos.subscribe(() => updateList(list));
  filter.subscribe(() => updateList(list));
  updateList(list);
  return list;
}
