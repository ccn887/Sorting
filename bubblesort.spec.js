/*global bubbleSort swap*/
describe('Bubble Sort', function(){
 beforeAll(function () {
  spyOn(window, 'swap').and.callThrough(); // replace existing `tootsiepop['lick']` method
});
it('counts swaps', function () {
  var a = [3,1,2,4]
  bubbleSort(a);
  expect(swap.calls.count()).toEqual(2);
});
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
});

  it('handles a single item', function(){
    var a = [1]
    expect( bubbleSort(a) ).toEqual( [1] );

  });
  it('handles multiple items', function(){
    var a = [3,1,2,4]
    expect( bubbleSort(a) ).toEqual( [1,2,3,4] );
  });
  it('handles multiple items', function(){
    var a = [3,1,2,4]
    expect( bubbleSort(a) ).toEqual( [1,2,3,4] );
    console.log(swap.calls.count());
  });
});

