export default class UiManager
{
    constructor(project)
    {
        this.project = project;
    }

    generateUI()
    {
        const todoList = document.querySelector(".todo-list");
        todoList.innerHTML = "";

        this.project.todoList.forEach(todo => {
            const todoElement = document.createElement("li");
            todoElement.innerHTML = `
                <div class="todo-title">${todo.title}</div>
                <div class="todo-btns">
                    <button data-id=${todo.id} class="todo-details-btn">Details</button>
                    <button data-id=${todo.id} class="todo-delete-btn">Delete</button>
                </div>
                <div class="todo-date">${todo.dueDate}</div>        
            `;

            todoList.appendChild(todoElement);
        })
    }
}