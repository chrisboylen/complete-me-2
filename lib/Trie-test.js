import { expect } from 'chai';
import Trie from '../lib/Trie';

describe('Trie', () => {
  let trie;

  beforeEach((() => {
    trie = new Trie();
  })

   it('Should be a thing', () => {
     expect(trie).to.exist;
   })

})