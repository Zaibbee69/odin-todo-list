export default class Project
{
    constructor()
    {
        this.todoList = [];
    }

    add(todo)
    {
        this.todoList.push(todo);
    }

    remove(index)
    {
        this.todoList.splice(index, 1);
    }

    getList()
    {
        return this.todoList;
    }

    getDetails()
    {
        return this.todoList.map(todo => ({
            id: todo.id,
            title: todo.title,
            description: todo.description,
            dueDate: todo.dueDate,
            priority: todo.priority,
            isCompleted: todo.isCompleted
        }));
    }
}