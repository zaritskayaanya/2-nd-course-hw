function age() {
    let age = +prompt('Сколько тебе лет?');
    if (age < 0) {
        alert ('Вы ввели неправильное значение');
    } else if (age >= 0 || age <= 12) {
        alert ('Привет, друг!');
    } else if (age >= 13) {
        alert ('Добро пожаловать!');
    } else {
        alert ('Вы ввели неправильное значение');
    }
}
console.log(age);
