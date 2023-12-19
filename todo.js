document.addEventListener('DOMContentLoaded', function () {
    const todoForm = document.getElementById('todoForm');
    const taskList = document.getElementById('taskList');
    const emptyTaskItems = taskList.querySelectorAll('.empty-task-item');

    // Загрузка задач из localStorage
    let savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

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
        } else {
            alert('Пожалуйста, введите текст задачи.');
        }
    });

    // Функция для отображения задачи
    function displayTask(taskText) {
        const emptyTaskItem = Array.from(emptyTaskItems).find(item => item.textContent === '');
        if (emptyTaskItem) {
            emptyTaskItem.textContent = taskText;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Удалить';
            deleteButton.addEventListener('click', function () {
                const taskIndex = savedTasks.indexOf(taskText);
                if (taskIndex !== -1) {
                    savedTasks.splice(taskIndex, 1);
                    localStorage.setItem('tasks', JSON.stringify(savedTasks));
                    emptyTaskItem.textContent = '';
                }
            });

            emptyTaskItem.appendChild(deleteButton);
        } else {
            alert('Нет доступных ячеек для отображения задачи.');
        }
    }

    // Функция для отображения ранее сохраненных задач
    function displayTasks(tasks) {
        for (const task of tasks) {
            displayTask(task);
        }
    }
});
