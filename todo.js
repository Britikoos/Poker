document.addEventListener('DOMContentLoaded', function () {
    const todoForm = document.getElementById('todoForm');
    const taskList = document.getElementById('taskList');

    // Загрузка задач из localStorage
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Отображение ранее сохраненных задач
    displayTasks(savedTasks);

    todoForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Получение значения задачи из формы
        const taskInput = document.getElementById('task');
        const taskText = taskInput.value.trim();

        if (taskText) {
            // Добавление задачи в массив
            savedTasks.push(taskText);

            // Сохранение массива задач в localStorage
            localStorage.setItem('tasks', JSON.stringify(savedTasks));

            // Отображение задачи
            displayTask(taskText);

            // Очистка поля ввода
            taskInput.value = '';
        }
    });

    // Функция для отображения задачи
    function displayTask(taskText) {
        const taskDiv = document.createElement('div');
        taskDiv.textContent = taskText;
        taskList.appendChild(taskDiv);
    }

    // Функция для отображения ранее сохраненных задач
    function displayTasks(tasks) {
        for (const task of tasks) {
            displayTask(task);
        }
    }
});
