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

  const container = div(
    { class: "toggle-btn-container" },
    toggle,
    "Select / Deselect all items",
  );

  // Subscribe to todos and reactively update toggle state and visibility
  todos.subscribe(() => {
    if (todos.value.length === 0) {
      toggle.checked = false;
      container.style.display = "none";
    } else {
      container.style.display = "";
      toggle.checked = todos.value.every((todo) => todo.completed);
    }
  });

  return container;
}
