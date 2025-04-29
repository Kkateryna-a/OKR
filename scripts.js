// Діалог з користувачем
function userDialog() {
    let count = prompt('Скільки країн ви хочете відвідати?');
    count = Number(count);

    if (isNaN(count) || count <= 0) {
        alert('Некоректне число!');
        return;
    }
// Метод getElementById
    let dynamicDiv = document.getElementById('dynamicContent');
    dynamicDiv.innerHTML = '<h2>Ваш список країн:</h2>';

    for (let i = 1; i <= count; i++) {
        let country = prompt(`Введіть назву країни №${i}:`);
        let countryElement = document.createElement('p');
        countryElement.textContent = `Країна №${i}: ${country}`;
        dynamicDiv.appendChild(countryElement);
    }
}

// Інформація про розробника
function showDeveloperInfo(surname, name, position = 'Студент') {
    alert(`Розробник: ${surname} ${name}\nПосада: ${position}`);
}

// Порівняння рядків
function compareStrings() {
    let str1 = prompt('Введіть перший рядок:');
    let str2 = prompt('Введіть другий рядок:');

    if (str1.length > str2.length) {
        alert('Більший рядок: ' + str1);
    } else if (str2.length > str1.length) {
        alert('Більший рядок: ' + str2);
    } else {
        alert('Рядки однакової довжини.');
    }
}

// Зміна фону на 30 секунд
function changeBackground() {
    document.body.style.backgroundColor = 'yellow';
    setTimeout(() => {
        document.body.style.backgroundColor = '';
    }, 30000);
}

// Перенаправлення на інший сайт
function redirectPage() {
    location.href = 'https://www.booking.com/';
}



// Робота з DOM після завантаження
window.onload = function() {
    // Зміна заголовка
    let title = document.querySelector('h1');
    if (title) {
        title.innerHTML += ' 🧳✈️';
    }

};