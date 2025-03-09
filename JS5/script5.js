function calc (a, b) {
    console.log(isNaN(a));
    console.log(isNaN(b));
    if (isNaN(a) || isNaN(b)){
        return 'Одно или оба значения не являются числом';
    } else {
        return a * b;
    }
}
console.log(calc('sorry', 6));