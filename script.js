var dugme = document.querySelector('#dugme');
var body = document.querySelector('body');
var text = document.querySelector('.container p');
var button = document.querySelector('.container button');
var colors = ['#d49505', '#0b17b1', '#af1535', '#5b0ccd'];

function setColor() {
  body.style.backgroundColor = 'red';
  text.style.color = 'red';
  button.style.backgroundColor = 'red';
}

dugme.addEventListener('click', setColor);
