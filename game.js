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

function game2() {
    const operators = ['+', '-', '*', '/'];
    let operator = operators[Math.floor(Math.random() * operators.length)];
    let a = Math.floor(Math.random() * 10) + 1;
    let b = Math.floor(Math.random() * 10) + 1;
    
    let correctAnswer;
    let promptMessage;

    if (operator === '-') {
        promptMessage = `Вычтите ${b} из ${a}:`;
        correctAnswer = a - b;       
    } else if (operator === '+') {
        promptMessage = `Сложите ${a} и ${b}:`;  
        correctAnswer = a + b;  
    } else if (operator === '*') {
        promptMessage = `Умножьте ${a} на ${b}:`;  
        correctAnswer = a * b;  
    } else {
        promptMessage = `Разделите ${a} на ${b}:`;  
        correctAnswer = (a / b).toFixed(2);
    }       

    const userAnswer = Number(prompt(promptMessage));

    if (userAnswer === correctAnswer) {
        alert("Верно! Правильный ответ: " + correctAnswer);
    } else {
        alert("Ошибка. Правильный ответ: " + correctAnswer);
    }
}
