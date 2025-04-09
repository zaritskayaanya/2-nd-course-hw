function randomNumber() {
    return Math.floor(Math.random() = 10);
}
const arr = [];
for (let i = 0; i < 10; i++) {
    arr.push(randomNumber()); 
}
console.log(arr);
const evenArr = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        evenArr.push(arr[i]);
    }  
}
console.log(evenArr);