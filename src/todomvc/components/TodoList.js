import { button, input, label, li, ul } from "../../../framework";
import { filter, todos } from "../main";

/**
 * Creates a todo item element.
 * @param {Object} todo - The todo item object.
 * @param {number} todo.id - The unique identifier for the todo item.
 * @param {string} todo.title - The title of the todo item.
 * @param {boolean} todo.completed - The completion status of the todo item.
 * @returns {HTMLElement} The created todo item element.
 */
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

  const deleteItem = button(
    {
      class: "todo-delete-btn",
      onClick: () => {
        todos.value = todos.value.filter((t) => t.id !== todo.id);
      },
    },
    "x",
  );

  return li(
    {
      class: `todo-item ${todo.completed ? "completed" : ""}`,
      id: `todo-${todo.id}`,
    },
    checkbox,
    label(
      {
        class: "todo-item-text",
        onClick: () => {
          const oldItem = document.querySelector(`#todo-${todo.id}`);
          const inputEl = input({
            class: "todo-replace",
            value: todo.title,
            onKeyDown: (e) => {
              if (e.key === "Enter") {
                const newValue = e.target.value.trim();
                if (newValue.length < 3) {
                  alert("Title must be at least 3 characters long.");
                  return;
                }

                todos.value = todos.value.map((t) =>
                  t.id === todo.id ? { ...t, title: newValue } : t,
                );
              } else if (e.key === "Escape") {
                todos.value = [...todos.value];
              }
            },
          });

          const newLi = li(
            {
              class: `todo-item editing`,
              id: `todo-${todo.id}`,
            },
            checkbox,
            inputEl,
          );

          oldItem.replaceWith(newLi);
        },
      },
      todo.title,
    ),
    deleteItem,
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
