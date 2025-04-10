function otrNumbers(array) {
    return array.filter(item => item < 0);
}
console.log(otrNumbers([1, 2, 3, -4, 5, -6, 7, 8, 9, 10]));