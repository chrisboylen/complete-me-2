import Node from './Node';

export default class Trie {
  constructor() {
    this.length = 0;
    this.rootNode = new Node();
    this.count = 0;
  }

  insert(word) {
    let currentNode = this.rootNode;
    let letters = [...word.toLowerCase()];
    
    while(letters.length) {
      let letter = letters.shift();

      if (!currentNode.children[letter]) {
        currentNode.children[letter] = new Node(letter);
      }
        currentNode = currentNode.children[letter];
    }

    if (!currentNode.completedWord) {
      currentNode.completedWord = word;
      this.count++;
    }
  }

  suggest() {

  }

  search() {
    
  }
}