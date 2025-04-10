function randomNumber() {
    return Math.floor(Math.random() * 10)
}
const arr = [];
for (let i = 0; i < 10; i++) {
    arr.push(randomNumber());
}
console.log(arr);
console.log(arr.reduce((a, b) => a + b) / arr.length);