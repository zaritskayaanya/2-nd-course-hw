function getNumber() {
    let number = prompt ('Введите число');
    if (isNaN(number)) {
        return 'Переданный параметр не является числом';
    } else {
        return `${number} в кубе равняется ${number ** 3}`;
    }  
}
console.log(getNumber());
