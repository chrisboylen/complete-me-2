import { expect } from 'chai';
import Trie from '../lib/Trie';
import Node from '../lib/Node';

describe('TRIE', () => {
  let trie;

  beforeEach(() => {
    trie = new Trie();
  })

   it('Should be a thing', () => {
     expect(trie).to.exist;
   })

   it('Should have a rootNode that is a new instance of a node', () => {
     expect(trie.rootNode).to.be.an.instanceof(Node)
   })

   it('Should have property of count set to 0', () => {
     expect(trie.count).to.equal(0);
   })

    describe('INSERT', () => {

    it('Should exist and be a method on the trie class', () => {

        expect(trie).respondsTo('insert');
      }) 
    })

    it('Should add a letter to the trie', () => {
      trie.insert('ann');

      expect(trie.count).to.equal(1);
      expect(trie.rootNode.children.a.word).to.equal('a');
      expect(trie.rootNode.children.a.children.n.word).to.equal('n'); 
    })

    it('Should be able to add a node to the trie', () => {
      trie.insert('ann');

      expect(trie.rootNode.children.a.word).to.equal('a');
    })

    it('Should force word to lowercase', () => {
      trie.insert('ANN');
      console.log(JSON.stringify(trie, null, 4));

      expect(trie.rootNode.children.a.word).to.equal('a');
      expect(trie.rootNode.children.a.children.n.word).to.equal('n');
    })

})