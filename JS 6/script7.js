const arr = [9, 8, 7, 6, 5];
const userNumber = +prompt('Введите число');
if (arr.includes(userNumber)) {
    alert('Угадал');
} else {
    alert('Не угадал');
}