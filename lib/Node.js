export default class Node {
  constructor(word = null) {
    this.word = word;
    this.children = {};
  }
}