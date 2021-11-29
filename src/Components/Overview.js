class Task {
    constructor(id, content, priority, dueDate) {
        this.id = id;
        this.content = content;
        this.priority = priority;
        this.dueDate = dueDate;
        this.done = false;
    }
    markDone() {
        this.done = true
    }
}

class TaskManager {
    constructor() {
        this.nextId = 4;
        this.initialTasks = [
            new Task(1, "Code"),
            new Task(2, "Sleep"),
            new Task(3, "Repeat") 
        ]
    };
    createTask(id, content, priority, dueDate) {
        return new Task(id, content, priority, dueDate);
    }
}

export default new TaskManager;