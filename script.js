const words = ['apple', 'banana', 'cherry', 'apricot', 'avocado', 'pineapple',
'grapefruit', 'kiwi', 'lime', 'lemon', 'mango', 'melon', 'orange', 'papaya',
'peach', 'pear', 'persimmon', 'plum', 'pomegranate', 'pomelo', 'tangerine', 'quince'];

let currentWord = '';
let currentIndex = 0;

window.onload = function() {
  currentWord = getRandomWord();
  displayWord(currentWord);
}


function getRandomWord() {
  const index = Math.floor(Math.random() * words.length);
  return words[index];
}

function displayWord(word) {
  const wordDiv = document.querySelector('.word');
  wordDiv.innerHTML = '';
  for(let i = 0; i < word.length; i++) {
    const span = document.createElement('span');
    span.textContent = word[i];
    wordDiv.append(span);
  }
}

document.addEventListener('keypress', function(event) {
  const letter = event.key;
  const span = document.querySelector('.word').children[currentIndex];
  if(letter === currentWord[currentIndex]) {
    span.classList = 'c';
    currentIndex++;
    if(currentIndex === currentWord.length) {
      document.querySelector('.correct-count').textContent++;
      currentWord = getRandomWord();
      displayWord(currentWord);
      currentIndex = 0;
    }
  } else {
    span.classList = 'w';
    document.querySelector('.wrong-count').textContent++;
    document.querySelector('.word-mistakes').textContent++;
  }
});