import Node from './Node';

export default class Trie {
  constructor() {
    this.length = 0;
    this.rootNode = new Node();
    this.count = 0;
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

  delete(word) {
    let currentNode = this.findNodeOfWord(word);

    if (currentNode) {
      currentNode.completedWord = null;
      this.count--;
    }
  }

  suggest(prefix) {
    this.suggestedWords = [];
    let currentNode = this.findNodeOfWord(prefix);

    if (!currentNode) {
      return null;
    }

    this.searchWords(currentNode);
    return this.suggestedWords.map(node => node.completedWord);
  }

  searchWords(node) {
    if (node.completedWord) {
      this.suggestedWords.push(node);
    }
      
    Object.keys(node.children).forEach(letter => {
      let currentNode = node.children[letter];

      this.searchWords(currentNode);
    });
  }

  counter() {
    return this.count;
  }

  populate(dictionary) {
    dictionary.forEach(word => this.insert(word));
  }
  
}