/*
Write a function to get the first elements of asequence. Passing a parameter n (default=1) will return the first n elements of the sequence.

If n == 0 return an empty sequence []

Examples
var arr = ['a', 'b', 'c', 'd', 'e'];
first(arr) //=> ['a'];
first(arr, 2) //=> ['a', 'b']
first(arr, 3) //=> ['a', 'b', 'c'];
first(arr, 0) //=> [];
*/

const first = (arr, n) => {
  let sequence = []

  if(n === undefined) {
    return [arr[0]];
  } else if(n > arr.length) {
    return arr;
  } else if(n > 0) {
    for(let i = 0; i < n; i++) {
      sequence.push(arr[i]);
    }
  }
  return sequence;
}