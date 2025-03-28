function age() {
    let age = +prompt('Сколько тебе лет?')
    if (age < 0) {
        alert ('Значение введено некорректно');
    } else if (age >= 0 || age <= 12)  {
        alert ('Привет, друг!');
    } else if (age >= 13) {
        alert ('Добро пожаловать!');
    } else {
        alert ('Вы ввели неправильное значение');
    }
}

age();
    
