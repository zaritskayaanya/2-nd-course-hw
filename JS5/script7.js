function getArea() {
    return Math.PI * this.radius ** 2;
}
function getPerimetr() {
    return 2 * Math.PI * this.radius;
}
const circle1 = { 
    radius: 10,
    metodGetArea: getArea,
    metodPerimetr: getPerimetr,
}
const circle2 = { 
    radius: 20,
    metodGetArea: getArea,
    metodPerimetr: getPerimetr,
}
console.log(circle1.metodGetArea());
console.log(circle2.metodGetArea());
