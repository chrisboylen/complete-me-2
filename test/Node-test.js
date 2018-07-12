import { expect } from 'chai';
import Node from '../lib/Node';

describe('NODE', () => {
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

  it('Should have have a default completedWord of null', () => {
    expect(node.completedWord).to.equal(null);
  })

  it('Should have a property of children that is an empty object', () => {

    expect(node.children).to.deep.equal({});
  })
})