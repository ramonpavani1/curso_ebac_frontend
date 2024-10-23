class TaskManager {
    constructor() {
        this.tasks = [];
    }

    // Adicionar tarefa
    addTask(task) {
        this.tasks.push(task);
        this.renderTasks();
    }

    // Remover tarefa
    removeTask(index) {
        this.tasks.splice(index, 1);
        this.renderTasks();
    }

    // Renderizar tarefas
    renderTasks() {
        const taskList = document.getElementById('task-list');
        taskList.innerHTML = ''; // Limpa a lista atual

        this.tasks.forEach((task, index) => {
            const taskItem = document.createElement('li');
            taskItem.textContent = task;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Remover';
            deleteButton.onclick = () => this.removeTask(index);

            taskItem.appendChild(deleteButton);
            taskList.appendChild(taskItem);
        });
    }
}

// Instanciar o gerenciador de tarefas
const taskManager = new TaskManager();

// Adicionar eventos aos botões
document.getElementById('add-task-button').addEventListener('click', () => {
    const taskInput = document.getElementById('task-input');
    const task = taskInput.value.trim();

    if (task) {
        taskManager.addTask(task);
        taskInput.value = ''; // Limpa o campo de entrada
    }
});

