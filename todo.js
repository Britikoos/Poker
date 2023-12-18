document.addEventListener('DOMContentLoaded', function () {
    const todoForm = document.getElementById('todoForm');
    const taskList = document.getElementById('taskList');

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
    // Вывод сообщения об ошибке или другого уведомления
    alert('Пожалуйста, введите текст задачи.');
}
    });

    // Функция для отображения задачи
    function displayTask(taskText) {
        const taskDiv = document.createElement('div');
        const deleteButton = document.createElement('button'); // Создаем кнопку для удаления задачи
        deleteButton.textContent = 'Удалить'; // Устанавливаем текст на кнопке
        taskDiv.textContent = taskText;
        taskDiv.appendChild(deleteButton); // Добавляем кнопку удаления к задаче
        taskList.appendChild(taskDiv);

        // Обработчик события для кнопки удаления
        deleteButton.addEventListener('click', function () {
            // Находим индекс задачи в массиве
            const index = savedTasks.indexOf(taskText);
            if (index !== -1) {
                // Удаляем задачу из массива
                savedTasks.splice(index, 1);

                // Обновляем localStorage
                localStorage.setItem('tasks', JSON.stringify(savedTasks));

                // Удаляем задачу из отображения
                taskList.removeChild(taskDiv);
            }
        });
    }

    // Функция для отображения ранее сохраненных задач
    function displayTasks(tasks) {
        for (const task of tasks) {
            displayTask(task);
        }
    }
});
