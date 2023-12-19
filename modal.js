// Открытие модального окна
const openModalButton = document.getElementById('openModalButton');
const modal = document.getElementById('myModal');
const closeModalButton = document.getElementById('closeModalButton');

openModalButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Закрытие модального окна
closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Отправка данных
const submitDataButton = document.getElementById('submitDataButton');
const nameInput = document.getElementById('nameInput');
const loginInput = document.getElementById('loginInput');

submitDataButton.addEventListener('click', () => {
    const name = nameInput.value;
    const login = loginInput.value;

    // Делайте что-то с данными, например, отправьте их на сервер
    console.log('Имя:', name);
    console.log('Логин:', login);

    // Закройте модальное окно
    modal.style.display = 'none';

    // Очистите поля ввода
    nameInput.value = '';
    loginInput.value = '';
});
