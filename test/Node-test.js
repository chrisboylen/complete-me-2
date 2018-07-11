import { expect } from 'chai';
import Node from '../lib/Node';

describe('Node', () => {
  let node;

  beforeEach(() => {
    node = new Node();
  })

  it('Should be a thing', () => {
    expect(node).to.exist;
  })

  it('Should have have a default word of null', () => {
    expect(node.word).to.equal(null);
  })
})