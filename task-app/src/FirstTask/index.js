const numArr = [4, 4, 4, 5, 6, 7, 7, 7, 8, 9, 11, 11, 15, 18, 20];

function getSum(arr, num) {
  let first = 0;
  let last = arr.length - 1;

  if (arr[0] >= num || arr[last] + arr[last - 1] < num) return false;

  while (first < last) {
    if (arr[first] + arr[last] === num) return true;
    if (arr[first] + arr[last] < num) first += 1;
    else last -= 1;
  }
  return false;
}

getSum(numArr, 18);
