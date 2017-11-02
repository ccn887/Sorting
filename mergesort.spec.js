describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here
    expect( split([1,2,3,4,5]) ).toEqual( [[1,2,3],[4,5]]);
  });
});
describe('Merge', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm
    expect( merge([1,2,6],[4,5]) ).toEqual([1,2,4,5,6])
  });
  });
  describe('Merge Sort', function(){
  it('is able to split an unsorted array and merge it into one sorted array', function(){
    // test the merging algorithm
    expect( merge([3,8,4,6,7,4,5]) ).toEqual([3,4,4,5,6,7,8])
  });
});
