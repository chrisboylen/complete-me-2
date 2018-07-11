import Node from './Node';

export default class Trie {
  constructor() {
    this.length = 0;
    this.rootNode = new Node();
    this.count = 0;
  }
}