// question 1
const myFunctionExpression = function() {
  console.log('André Lekve');
};
myFunctionExpression();
// your answer for question 1 goes here

// question 2
document.addEventListener('click', function() {});

const button = document.querySelector('.btn');

function callAfterButtonClick() {
  console.log('I was clicked');
}

button.addEventListener('click', callAfterButtonClick);
// your answer for question 2 goes here

// question 3
document.addEventListener('keydown', function() {});

const textInput = document.getElementById('firstName');

function callAfterButtonIsDown(event) {
  console.dir(event);
}

textInput.addEventListener('keydown', callAfterButtonIsDown);
// your answer for question 3 goes here

// question 4
document.addEventListener('mouseover', function() {});

const hoverButton = document.querySelector('button');
hoverButton.classList.add('hover');

function callOnHover() {
  console.log();
}

hoverButton.addEventListener('mouseover', callOnHover);
// your answer for question 4 goes here

// question 5
document.addEventListener('mouseout', function() {});

const hoverOutButton = document.querySelector("[data-animal='dog']");
hoverOutButton.classList.remove('hover');

function callOnOut() {
  console.log('I hover out');
}

hoverOutButton.addEventListener('mouseout', callOnOut);
// your answer for question 5 goes here

// question 6
document.addEventListener('mouseover', function() {});

const liTag = document.querySelector('UL');

for (let i = 0; i < liTag.length; i++) {
  liTag[i].addEventListener('mouseover', callOnHoverLi);
}

function callOnHoverLi(event) {
  console.log(event);
}

liTag.addEventListener('mouseover', callOnHoverLi);
// your answer for question 6 goes here

// question 7
const animal = 'cow';

switch (animal) {
  case 'cat':
    console.log('Meow');
    break;

  case 'cow':
    console.log('Moo');
    break;

  case 'bird':
    console.log('Tweet');
    break;

  default:
    console.log('Harrumph');
}
// your answer for question 7 goes here

// question 8
const sheep = ['Malcolm', 'Anders', 'Marie'];

sheep.forEach(function(sheep) {
  console.log(sheep);
});

function handleEachSheep(item) {
  console.log(item);
}
// your answer for question 8 goes here

// question 9
function logWord() {
  console.log('hello');

  if (counter === 5) {
    clearInterval(intervalId);
  }

  counter++;
}

let counter = 0;

const intervalId = setInterval(logWord, 500);
// your answer for question 9 goes here

// question 10
const container = document.querySelector('.container');

function updateDivText() {
  container.innerText = 'Text update';
}

setTimeout(updateDivText, 2000);
// your answer for question 10 goes here
