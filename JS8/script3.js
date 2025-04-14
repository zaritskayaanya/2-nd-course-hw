const intervalID = setInterval(() => {
    console.log('Hello');
}, 3000);

setTimeout(() => {
    clearInterval(intervalID);
    console.log('Время прошло');
}, 7000);