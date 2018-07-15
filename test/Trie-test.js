import { expect } from 'chai';
import Trie from '../lib/Trie';
import Node from '../lib/Node';
import fs from 'fs';

const text = "/usr/share/dict/words";
const dictionary = fs.readFileSync(text).toString().trim().split('\n');


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

    it('Should have suggested words set to an empty array', () => {

      expect(trie.suggestedWords).to.be.empty;
    })

    describe('FINDNODEOFWORD', () => {
      it('Should exist and be a method on the trie class', () => {

      expect(trie).respondsTo('findNodeOfWord');
      })

      it('Should return the last node of a word', () => {
        trie.insert('ann');
        trie.findNodeOfWord('ann');
        
        expect(trie.findNodeOfWord('ann')).to.deep.equal(trie.rootNode.children.a.children.n.children.n);
      })

      it('Should return the correct word when completed word still has children', () => {
        trie.insert('ann');
        trie.insert('anna');
        trie.findNodeOfWord('ann');

        expect(trie.findNodeOfWord('ann')).to.deep.equal(trie.rootNode.children.a.children.n.children.n);
      })

      it('Should return the correct word when completed word has multiple children', () => {
        trie.insert('ann');
        trie.insert('anna');
        trie.insert('andrew');
        trie.insert('alice');
        trie.findNodeOfWord('ann');

        expect(trie.findNodeOfWord('ann')).to.deep.equal(trie.rootNode.children.a.children.n.children.n);
      })

      it('Should return null if there no words that match', () => {
        trie.findNodeOfWord('ann');

        expect(trie.findNodeOfWord('ann')).to.deep.equal(null);
      })

    })

    describe('INSERT', () => {
      it('Should exist and be a method on the trie class', () => {

        expect(trie).respondsTo('insert');
      }) 

      it('Should add a letter to the trie', () => {
        trie.insert('ann');

        expect(trie.rootNode.children.a.word).to.equal('a');
        expect(trie.rootNode.children.a.children.n.word).to.equal('n'); 
      })

      it('Should be able to add a node to the trie', () => {
        trie.insert('ann');

        expect(trie.rootNode.children.a.word).to.equal('a');
      })

      it('Should force word to lowercase', () => {
        trie.insert('ANN');

        expect(trie.rootNode.children.a.word).to.equal('a');
        expect(trie.rootNode.children.a.children.n.word).to.equal('n');
      })

      it('Should increase count when word is inserted into trie', () => {
        trie.insert('ANN');

        expect(trie.count).to.equal(1);
      })

      it('Should define the end of a word', () => {
        trie.insert('ann');

        expect(trie.rootNode.children.a.children.n.children.n.completedWord).to.equal('ann');
      })

      it('Should not increase count when duplicate words are inserted', () => {
        trie.insert('ann');
        trie.insert('dan');
        trie.insert('ann');

        expect(trie.count).to.equal(2);
      })

      it('Should have more than one child when two or more nodes share a parent', () => {
        trie.insert('ann');
        trie.insert('andrew');

        expect(Object.keys(trie.rootNode.children.a.children.n.children).length).to.equal(2);
      })
    })

    describe('DELETE', () => {
      it('Should exist and be a method on the trie class', () => {

        expect(trie).respondsTo('delete');
      })

      it('Should set the completedWords property of the last node in a word to null', () => {
        trie.insert('ann');
        trie.delete('ann');

        expect(trie.rootNode.children.a.children.n.children.n.completedWord).to.equal(null);
      })

      it('Should decrease count when word is deleted from trie', () => {
        trie.insert('ANN');
        trie.insert('andrew');
        trie.delete('ann');

        expect(trie.count).to.equal(1);
      })
    })

    describe('SUGGEST', () => {
      it('Should exist and be a method on the trie class', () => {

        expect(trie).respondsTo('suggest');
      })

      it('Should push completed words into an array', () => {
        trie.insert('ann');
        trie.insert('andrew');
        trie.suggest('a')
        
        expect(trie.suggest('a')).to.deep.equal(['ann', 'andrew']);
      })

      it('Should not push duplicate words into an array', () => {
        trie.insert('ann');
        trie.insert('ann');
        trie.insert('andrew');
        trie.suggest('a')

        expect(trie.suggest('a')).to.deep.equal(['ann', 'andrew']);
      })

      it('Should push correct completed words into an array', () => {
        trie.insert('ann');
        trie.insert('allen');
        trie.insert('andrew');
        trie.suggest('an')

        expect(trie.suggest('an')).to.deep.equal(['ann', 'andrew']);
      })

      it('Should return null if no words are found', () => {
        trie.insert('ann');
        trie.insert('andrew');
        trie.suggest('c')

        expect(trie.suggest('c')).to.deep.equal(null);
      })

    })

    describe('SEARCHWORDS', () => {
      it('Should exist and be a method on the trie class', () => {

        expect(trie).respondsTo('searchWords');
      })
    })

    describe('COUNTER', () => {
      it('Should exist and be a method on the trie class', () => {

        expect(trie).respondsTo('counter');
      })

      it('Should display word count when a word is added to the trie', () => {
        trie.insert('ann');

        expect(trie.counter()).to.equal(1)
      })
    })

    describe('POPULATE', () => {
      it('Should exist and be a method ot he trie class', () => {

        expect(trie).respondsTo('populate');
      })

      it('Should populate the trie with the dictionary in the computer', () => {
        trie.populate(dictionary);

        expect(trie.counter()).to.equal(234371)
      })
    })
})