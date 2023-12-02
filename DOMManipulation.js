function showAllTodos() {
    todos_list_body.innerHTML = "";
    if (todos.length === 0) {
      todos_list_body.innerHTML = `<tr><td colspan="5" class="text-center">No task found</td></tr>`;
      return;
    }
  
    todos.forEach((todo) => {
      todos_list_body.innerHTML += `
              <tr class="todo-item" data-id="${todo.id}">
                  <td>${todo.task}</td>
                  <td>${todo.dueDate || "No due date"}</td>
                  <td>${todo.status}</td>
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