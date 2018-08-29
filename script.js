var dugme = document.querySelector('#dugme');
var body = document.querySelector('body');
var text = document.querySelector('.container p');
var author = document.querySelector('.container span');
var button = document.querySelector('.container button');
var colors = ['#d49505', '#0b17b1', '#af1535', '#5b0ccd'];
var quotes = [
  {
    quote: 'Neki text 1',
    author: 'author 1'
  },
  {
    quote: 'Neki text 2',
    author: 'author 2'
  },
  {
    quote: 'Neki text 3',
    author: 'author 3'
  },
  {
    quote: 'Neki text 4',
    author: 'author 4'
  },
  {
    quote: 'Neki text 5',
    author: 'author 5'
  },
  {
    quote: 'Neki text 6',
    author: 'author 6'
  }
];

function setColor() {
  var index = randomNumber(colors);
  body.style.backgroundColor = colors[index];
  text.style.color = colors[index];
  author.style.color = colors[index];
  button.style.backgroundColor = colors[index];
}

function setQuote() {
  var index = randomNumber(quotes);
  text.innerText = quotes[index].quote;
  author.innerText = quotes[index].author;
}

function randomNumber(arr) {
  return Math.floor(Math.random() * arr.length);
}

dugme.addEventListener('click', () => {
  setColor();
  setQuote();
});
