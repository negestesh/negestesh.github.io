/* global describe */
/* global it */
/* global assert */

/* this test tests the filter function on Strings */
describe('filter', () => {
  it('takes a word argument and removes that word from the string', () => {
    const test = 'This house is not nice!';
    assert.equal(test.filter('not'), 'This house is nice!');
  });
});
/* this test tests the bubbleSort function on Arrays */
describe('bubbleSort', () => {
  it('takes an array of numbers and sorts them by repeatedly going through the list', () => {
    const actual = [6, 4, 0, 3, -2, 1].bubbleSort();
    const expected = [-2, 0, 1, 3, 4, 6];
    for (let index = 0; index < actual.length; index++) {
      assert.equal(actual[index], expected[index]);
    }
  });
});
