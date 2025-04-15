function delayForSecond(callback) {
    setTimeout(callback, 1000)
}
delayForSecond(function () {
    console.log('Привет, Глеб!');
})