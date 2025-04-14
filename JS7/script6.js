function getRandomNumber(num) {
    return Array.from({ length: Math.floor(num / 2) }, () => Math.floor(Math.random() * num));
}
console.log(getRandomNumber(10));