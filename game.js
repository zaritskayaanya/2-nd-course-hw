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

function game3() {
    // Запрашиваем у пользователя ввод текста и разбиваем его на массив символов
    let splitString = String(prompt("Введите Ваш текст")).split("");
    // Переворачиваем массив символов
    let reverseArray = splitString.reverse();
    // Соединяем перевёрнутый массив символов обратно в строку
    let joinArray = reverseArray.join("");

    return joinArray; // Возвращаем перевёрнутую строку
}

// Вызов функции и вывод результата в консоль
let result = game3(); 
alert("Перевернутый текст: " + result);

function game4() {
    const quiz = [
        {
            question: "Какого цвета небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];
    
    let num = 0;
    
    for (let i = 0; i < quiz.length; i++) {
        let quizQuest = prompt(`Выбери правильный ответ? \n${quiz[i].question} \n${quiz[i].options.join('\n')}`);
        
        if (parseInt(quizQuest) === quiz[i].correctAnswer) {
            num++;
            alert("Вы ответили верно!");
        } else{
            alert("Вы ответили неверно!");
        }
    }
    
    alert(`Вы ответили на ${num} вопросов`);
}