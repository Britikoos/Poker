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
    const name = nameInput.value.trim();
    const login = loginInput.value.trim();

    if (!name) {
        alert('Пожалуйста, введите name.');
    } else if (!login) {
        alert('Пожалуйста, введите login.');
    } else {
        console.log('Имя:', name);
        console.log('Логин:', login);

        modal.style.display = 'none';

        nameInput.value = '';
        loginInput.value = '';
    }
    
});
