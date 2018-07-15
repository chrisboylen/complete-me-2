import Node from './Node';

export default class Trie {
  constructor() {
    this.length = 0;
    this.rootNode = new Node();
    this.count = 0;
    this.suggestedWords = [];
  }

  findNodeOfWord(word) {
    let currentNode = this.rootNode;
    let letters = [...word.toLowerCase()];

    while (letters.length) {
      let letter = letters.shift();

      if (currentNode.children[letter]) {
        currentNode = currentNode.children[letter];
      } else {
        return null;
      }
    }

    return currentNode;
  }

  insert(word) {
    let currentNode = this.rootNode;
    let letters = [...word.toLowerCase()];
    
    while (letters.length) {
      let letter = letters.shift();

      if (!currentNode.children[letter]) {
        currentNode.children[letter] = new Node(letter);
      }
      currentNode = currentNode.children[letter];
    }

    if (!currentNode.completedWord) {
      currentNode.completedWord = word.toLowerCase();
      this.count++;
    }
  }

  suggest() {

  }

  suggest(prefix) {
    let currentNode = this.findNodeOfWord(prefix);

    if (!currentNode) {
      return null;
    }

    this.searchWords(currentNode);
    return this.suggestedWords;
  }

  searchWords(node) {
    if (node.completedWord) {
      this.suggestedWords.push(node.completedWord);
    }
      
    Object.keys(node.children).forEach(letter => {
      let currentNode = node.children[letter];

      this.searchWords(currentNode);
    })
  }
  
}