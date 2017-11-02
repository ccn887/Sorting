function split(wholeArray) {
var midPoint = Math.ceil((wholeArray.length/2));
var firstHalf = wholeArray.slice(0, midPoint);
var secondHalf = wholeArray.slice(midPoint);
  /* your code here to define the firstHalf and secondHalf arrays */

  return [firstHalf, secondHalf];
}
function merge(arr1, arr2){
  var newArr = [];
  var count1 = 0;
  var count2 = 0;
  while (count1 < arr1.length && count2 < arr2.length){
    if(arr1[count1] < arr2[count2]){
      newArr.push(arr1[count1]);
      count1++;
    } else {
      newArr.push(arr2[count2]);
      count2++;
    }
    } return newArr.concat(arr2.slice(count2)).concat(arr1.slice(count1));
  }

  function mergeSort(array) {
    if(array.length === 1){
      return array;
    }
      var splits = split(array);
      var left = splits[0];
      var right = splits[1];
      merge(mergeSort(left), mergeSort(right));

    }

