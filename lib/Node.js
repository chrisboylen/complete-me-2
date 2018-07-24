module.exports = class Node {
  constructor(word = null, completedWord = null) {
    this.word = word;
    this.completedWord = completedWord;
    this.children = {};
  }
}