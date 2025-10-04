import { v4 } from "uuid";

export default class Todo
{
    constructor(title, description, dueDate, priority)
    {
        this.id = v4();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.isCompleted = false;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    toggleCompleted()
    {
        this.isCompleted = !this.isCompleted;
    }

    updateDetails(title, description, dueDate, priority)
    {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    getDetail()
    {
        return {
            id: this.id,
            title: this.title,
            description: this.description,
            dueDate: this.dueDate,
            priority: this.priority,
            isCompleted: this.isCompleted
        }
    }
}