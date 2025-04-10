let n = 1000;
let num = 0; 
while (n >= 50) {
    n /= 2;
    console.log(n);
    num++;
}
console.log(`Количество циклов: ${num}`);