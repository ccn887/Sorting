
function swap(larger, smaller) {

  var newArr = []
  newArr.push(smaller);
  newArr.push(larger)
  return newArr;

  /* your code here */

}
function compare(larger, smaller) {
  return larger > smaller
  /* your code here */

}

function bubbleSort(array) {
  var swapped;
  for(var i= 0; i< array.length; i++){
    for(var j = 0; j< array.length - 1- i; j++){
      if(compare(array[j],array[j+1])){
        swapped = swap(array[j], array[j+1])
          array[j] = swapped[0]
          array[j+1] = swapped[1]
      }
  }} return array
  /* your code here */

}
