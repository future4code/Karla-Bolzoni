export function ordenaArray(array) {
  function sortNumber(a, b) {
    return a - b;
 }
 
 return array.sort(sortNumber);
}
