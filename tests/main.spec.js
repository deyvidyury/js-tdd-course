const { expect } = require('chai');

describe('Main', () => {
  let arr;

  beforeEach(() => {
    arr = [1, 2, 3];
  });

  it('should be an array', () => {
    expect(arr).to.be.a('array');
  });

  it('Case 1', () => {
    arr.push(4);
    expect(arr).to.have.length(4);
  });

  it('Case 2', () => {
    arr.pop();
    expect(arr).to.not.include(3);
  });

  it('Case 3', () => {
    arr.pop();
    expect(arr).to.have.length(2);
  });
});
