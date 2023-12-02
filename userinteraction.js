//show alert message
function showAlertMessage(message, type) {
    let alert_box = `
          <div class="alert alert-${type} shadow-lg mb-5 w-full">
              <div>
                  <span>
                      ${message}
                  </span>
              </div>
          </div>
      `;
    alert_message.innerHTML = alert_box;
    alert_message.classList.remove("hide");
    alert_message.classList.add("show");
    setTimeout(() => {
      alert_message.classList.remove("show");
      alert_message.classList.add("hide");
    }, 3000);
  }
  
  //delete todo
  function deleteTodo(id) {
    todos = todos.filter((todo) => todo.id !== id);
    saveToLocalStorage();
    showAlertMessage("Todo deleted successfully", "success");
    showAllTodos();
  }
  
  //edit todo
  function editTodo(id) {
    let todo = todos.find((todo) => todo.id === id);
    task_input.value = todo.task;
    todos = todos.filter((todo) => todo.id !== id);
    add_btn.innerHTML = "<i class='bx bx-check bx-sm'></i>";
    saveToLocalStorage();
    add_btn.addEventListener("click", () => {
      add_btn.innerHTML = "<i class='bx bx-plus bx-sm'></i>";
      showAlertMessage("Todo updated successfully", "success");
    });
  }
  
  //clear all todos
  function clearAllTodos() {
    if (todos.length > 0) {
      todos = [];
      saveToLocalStorage();
      showAlertMessage("All todos cleared successfully", "success");
      showAllTodos();
    } else {
      showAlertMessage("No todos to clear", "error");
    }
  }
  
  function toggleStatus(id) {
    let todo = todos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    console.log("todo", todo);
    saveToLocalStorage();
    displayTodos(todos);
  }
  
  function filterTodos(status) {
    let filteredTodos;
    switch (status) {
      case "all":
        filteredTodos = todos;
        break;
      case "pending":
        filteredTodos = todos.filter((todo) => !todo.completed);
        break;
      case "completed":
        filteredTodos = todos.filter((todo) => todo.completed);
        break;
    }
    displayTodos(filteredTodos);
  }
  
  function displayTodos(todosArray) {
    todos_list_body.innerHTML = "";
    if (todosArray.length === 0) {
      todos_list_body.innerHTML = `<tr><td colspan="5" class="text-center">No task found</td></tr>`;
      return;
    }
    todosArray.forEach((todo) => {
      todos_list_body.innerHTML += `
              <tr class="todo-item" data-id="${todo.id}">
                  <td>${todo.task}</td>
                  <td>${todo.dueDate || "No due date"}</td>
                  <td>${todo.completed ? "Completed" : "Pending"}</td>
                  <td>
                      <button class="btn btn-warning btn-sm" onclick="editTodo('${
                        todo.id
                      }')">
                          <i class="bx bx-edit-alt bx-bx-xs"></i>    
                      </button>
                      <button class="btn btn-success btn-sm" onclick="toggleStatus('${
                        todo.id
                      }')">
                          <i class="bx bx-check bx-xs"></i>
                      </button>
                      <button class="btn btn-error btn-sm" onclick="deleteTodo('${
                        todo.id
                      }')">
                          <i class="bx bx-trash bx-xs"></i>
                      </button>
                  </td>
              </tr>
      `;
    });
  }
  