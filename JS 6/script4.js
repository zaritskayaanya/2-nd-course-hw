const arr = [];
for (let i = 0; i < 3; i++) {
    const arr2 = [];
    for (let i = 0; i < 3; i++) {
        arr2.push(1);
    }
    arr.push(arr2);
}
console.log(arr);