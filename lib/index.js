import Trie from './Trie';
import fs from 'fs';

const userInput = document.querySelector('.user-input');
const text = '/usr/share/dict/words';
const dictionary = fs.readFileSync(text).toString().trim().split('\n');
let trie = new Trie();

trie.populate(dictionary);

document.querySelector('.submit').addEventListener('click', function(e) {
  e.preventDefault();
  submitSuggestions();
});

const submitSuggestions = () => {
  let word = userInput.nodeValue;
  let suggestedWords = trie.suggest(word);

  document.querySelector('.display-sug').prepend(
    `<ul class="suggested-list">${suggestedWords}</ul>`
  );
};