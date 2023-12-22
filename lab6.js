// Функция для скрытия preloader
function hidePreloader() {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
}

// Функция для обработки данных и отображения их на странице
function renderData(data) {
    const content = document.getElementById('content');
    
    // Создаем таблицу
    const table = document.createElement('table');

    // Создаем заголовок таблицы
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const headers = ["title", "completed"]; // Замените заголовки на свои
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Создаем тело таблицы
    const tbody = document.createElement('tbody');
    data.forEach(item => {
        const row = document.createElement('tr');
        const cell1 = document.createElement('td');
        cell1.textContent = item.title; // Замените на соответствующее поле из ваших данных
        const cell2 = document.createElement('td');
        cell2.textContent = item.completed; // Замените на соответствующее поле из ваших данных
        row.appendChild(cell1);
        row.appendChild(cell2);
        tbody.appendChild(row);
    });
    table.appendChild(tbody);

    // Очищаем контент и добавляем таблицу
    content.innerHTML = '';
    content.appendChild(table);
}


// Функция для выполнения запроса с помощью Fetch API и возврата Promise
function fetchWithPromise(url, options) {
    return new Promise((resolve, reject) => {
        fetch(url, options)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Ошибка HTTP: ' + response.status);
                }
                return response.json();
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            });
    });
}

// Функция для выполнения запроса с псевдослучайной фильтрацией
async function fetchRandomData() {
    try {
        const randomId = Math.floor(Math.random() * 101) + 100; // Генерация случайного ID
        const url = `https://jsonplaceholder.typicode.com/todos?id_gte=${randomId}`;
        const options = { method: 'GET' };

        const data = await fetchWithPromise(url, options);
        renderData(data);
        hidePreloader();
    } catch (error) {
        console.error(error);
        const content = document.getElementById('content');
        content.textContent = 'Произошла ошибка. Попробуйте позже.';
        hidePreloader();
    }
}

// Ожидание события загрузки страницы
document.addEventListener('DOMContentLoaded', () => {
    // Выполнение запроса при загрузке страницы
    const url = 'https://jsonplaceholder.typicode.com/todos';
    const options = { method: 'GET' };

    fetchWithPromise(url, options)
        .then(data => {
            renderData(data);
            hidePreloader();
        })
        .catch(error => {
            console.error(error);
            const content = document.getElementById('content');
            content.textContent = 'Произошла ошибка. Попробуйте позже.';
            hidePreloader();
        });

    // Находим кнопку по ее ID
    const randomDataButton = document.getElementById('randomDataButton');

    // Добавляем обработчик события клика на кнопку
    randomDataButton.addEventListener('click', () => {
        fetchRandomData(); // Выполнение запроса при клике на кнопку
    });
});
