const sum = require('./sum');

describe('Sum function', () => {
  it('should sum 2 positive integers correctly', () => {
    expect(sum(1, 2)).toEqual(3);
  });
});
