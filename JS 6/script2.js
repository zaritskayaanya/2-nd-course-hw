const arr = [1, 5, 4, 10, 0, 3]
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 4) {
        console.log(i);
        break;
    }
}