import Todo from "./components/todoClass";
import Project from "./components/projectClass";
import UiManager from "./components/uiManager";
import "./styles/styles.scss";

// title, description, dueDate and priority.notes or even a checklist.


const EventListener = (function ()
{
    const addTodoBtn = document.querySelector(".add-todo");
    const modal = document.getElementById("todo-modal");
    const closeModal = document.getElementById("close-modal");
    
    const init = () => {
        addTodoBtn.addEventListener("click", () => {
            modal.classList.remove("hidden");
        });

        closeModal.addEventListener("click", () => {
            modal.classList.add("hidden");
        });
    }

    return {init}
})();

EventListener.init();

