function game1() {
    const hiddenNumber = Math.floor(Math.random() * 100) + 1;
    let guess;
    alert('Угадай число');

    while (true) {
        const input = prompt('Попробуй угадать число от 1 до 100');
        guess = Number(input);

        if (input === null) {
            alert('Попробуй еще раз');
            return;
        }

        if (guess === hiddenNumber) {
            alert ('Вы угадали число!');
            break;
        } else if (guess < hiddenNumber) {
            alert ('Не угадал, число должно быть больше!');
        } else {
            alert ('Не угадал, число должно быть меньше!');
        } 
    }
}