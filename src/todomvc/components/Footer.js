import { div, button } from "../../../framework";
import { navigate } from "../../../framework/router";
import { filter, todos } from "../main";

export function Footer() {
  const filters = ["all", "active", "completed"];

  const buttons = filters.map((name) =>
    button(
      {
        class: "btn",
        onClick: () => {
          filter.value = name;
          const url = name === "all" ? "/" : `/${name}`;
          navigate(url);
        },
      },
      name[0].toUpperCase() + name.slice(1),
    ),
  );
  const container = div({ class: "footer" }, ...buttons);

  // This handles the clearButton visiblity
  function updateFooter() {
    const completedTodos = todos.value.filter((todo) => todo.completed);
    const isCompleted = completedTodos.length > 0;
    const hasTodos = todos.value.length > 0;

    container.style.display = hasTodos ? "block" : "none";

    const existingClearButton = container.querySelector(".clear-completed");

    if (isCompleted && !existingClearButton) {
      const clearButton = button(
        {
          class: "btn clear-completed",
          onClick: () => {
            todos.value = todos.value.filter((todo) => !todo.completed);
          },
        },
        "Clear completed",
      );
      container.append(clearButton);
    } else if (!isCompleted && existingClearButton) {
      // Remove the button if no completed todos exist
      existingClearButton.remove();
    }
  }

  todos.subscribe(updateFooter);
  filter.subscribe(updateFooter);

  // Initial check for clear button visibility
  updateFooter();

  return container;
}
