// Объявляем переменные для кнопок
const colorBtn = document.querySelector('#colorBtn');
const reverseBtn = document.querySelector('#reverseBtn');
const guessNumberBtn = document.querySelector('#guessNumberBtn');
const mathQuizBtn = document.querySelector('#mathQuizBtn');
const quizBtn = document.querySelector('#quizBtn');
const rpsBtn = document.querySelector('#rpsBtn');

// --- Игра "Угадай число" ---
function game1() {
    const hiddenNumber = Math.floor(Math.random() * 100) + 1;
    alert('Игра "Угадай число"');
    while (true) {
        const input = prompt('Попробуйте угадать число от 1 до 100');
        if (input === null) {
            alert('Игра закончена');
            return; 
        }
        const guess = Number(input);
        if (isNaN(guess) || guess < 1 || guess > 100) {
            alert('Введите число от 1 до 100!');
            continue;
        }
        if (guess === hiddenNumber) {
            alert('Вы угадали число! Это было: ' + hiddenNumber);
            
            return; 
        } else if (guess < hiddenNumber) {
            alert('Больше!');
        } else {
            alert('Меньше!');
        }
    }
}

// --- Арифметическая игра ---
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
        promptMessage = `Разделите ${a} на ${b} (до двух знаков после запятой):`;
        correctAnswer = (a / b).toFixed(2);
    }

    const userAnswer = prompt(promptMessage);
    if (userAnswer === null) {
        alert('Игра завершена.');
        return;
    }

    // Преобразуем пользовательский ввод в число
    const userAnswerNumber = parseFloat(userAnswer.replace(',', '.')); // чтобы убрать возможные запятые

    // Округляем правильный ответ для сравнения
    const correctAnswerNumber = parseFloat(correctAnswer);

    // Сравниваем числа с точностью до двух знаков
    if (Math.abs(userAnswerNumber - correctAnswerNumber) < 0.01) {
        alert("Верно! Правильный ответ: " + correctAnswer);
    } else {
        alert("Ошибка. Правильный ответ: " + correctAnswer);
    }
}

// --- Функция переворота текста ---
function game3() {
    let text = prompt("Введите Ваш текст");
    if (text === null || text.trim() === "") {
        alert("Вы ничего не ввели");
        return;
    }
    let splitString = String(text).split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    alert("Перевернутый текст: " + joinArray);
}

// --- Викторина ---
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

    let numCorrect = 0;

    for (let i = 0; i < quiz.length; i++) {
        const answer = prompt(`${quiz[i].question}\n${quiz[i].options.join('\n')}`);
        if (answer === null) {
            alert("Игра завершена");
            return;
        }
        if (parseInt(answer) === quiz[i].correctAnswer) {
            alert("Верно!");
            numCorrect++;
        } else {
            alert("Неверно!");
        }
    }
    alert(`Вы ответили правильно на ${numCorrect} из ${quiz.length} вопросов.`);
}

// --- Камень-ножницы-бумага ---
function game5() {
    const options = ['камень', 'ножницы', 'бумага'];
    const userChoice = prompt("Введите ваш выбор (камень, ножницы, бумага):").toLowerCase();
    if (!options.includes(userChoice)) {
        alert("Неверный выбор! Введите: камень, ножницы или бумага.");
        return;
    }
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    let result;
    if (userChoice === computerChoice) {
        result = "Ничья!";
    } else if (
        (userChoice === 'камень' && computerChoice === 'ножницы') ||
        (userChoice === 'ножницы' && computerChoice === 'бумага') ||
        (userChoice === 'бумага' && computerChoice === 'камень')
    ) {
        result = "Вы выиграли!";
    } else {
        result = "Проиграли!";
    }
    alert(`Ваш выбор: ${userChoice}\nКомпьютер: ${computerChoice}\nРезультат: ${result}`);
}

 // --- Функция смены цвета ---
 function game6() {
    const colors = '123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += colors[Math.floor(Math.random() * 16)];
    }
    return color;
}

colorBtn.addEventListener('click', () => {
    const gamebox = document.querySelector('.game-box');
    gamebox.style.backgroundColor = game6();
})
 