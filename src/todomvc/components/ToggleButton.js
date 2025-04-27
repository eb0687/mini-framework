import { div, input } from "../../../framework";
import { todos } from "../main";

export function ToggleButton() {
  const toggle = input({
    class: "todo-checkbox",
    type: "checkbox",
    onChange: () => {
      const allCompleted = todos.value.every((todo) => todo.completed);
      todos.value = todos.value.map((t) => ({
        ...t,
        completed: !allCompleted,
      }));
    },
  });
  return div(
    { class: "toggle-btn-container" },
    toggle,
    "Select / Deselect all items",
  );
}
