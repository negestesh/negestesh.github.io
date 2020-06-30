/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* global describe */
/* global it */
/* global assert */
/* global sum */
/* global multiply */
/* global reverseString */
/* global filterLongWords */
describe('sum', () => {
  it('sums the values in the array passed as a parameter', () => {
    assert.equal(sum([1, 2, 3, 4, 5]), 15);
  });
});

describe('multiply', () => {
  it('multiplies the values in the array passed as a parameter', () => {
    assert.equal(multiply([2, 3, 4]), 24);
  });
});

describe('reverseString', () => {
  it('reverses the given string passed as a parameter', () => {
    assert.equal(reverseString('my name is'), 'si eman ym');
  });
});

describe('filterLongWords', () => {
  it('filters the words that have length greater than the passed parameter', () => {
    const expected = ['great', 'wolves', 'music'];
    const actual = filterLongWords(['great', 'wolves', 'music', 'harp'], 4);
    for (let i = 0; i < expected.length; i++) {
      assert.equal(actual[i], expected[i]);
    }
  });
});
