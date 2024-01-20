import { merge } from '../src/mergeArrays';

describe('Merge Arrays', () => {
  it('should merge two sorted arrays', () => {
    const result = merge([1, 3, 5], [2, 4, 6]);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
