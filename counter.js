
const square = document.querySelector('.square');
const squareTitle = document.querySelector('.square__title');
const circle = document.querySelector('.circle');
const circleTitle = document.querySelector('.circle__title');
const triangle = document.querySelector('.triangle');
const triangleTitle = document.querySelector('.triangle__title');

function add(start = 0, shape){
let number = start
return () => {
    number++;
    shape.textContent = `${number}`
}
}


const counterSquare = add(0, squareTitle);
const counterCircle = add(0, circleTitle);
const counterTriangle = add(0, triangleTitle);


square.addEventListener('click',counterSquare)
circle.addEventListener('click',counterCircle)
triangle.addEventListener('click',counterTriangle)