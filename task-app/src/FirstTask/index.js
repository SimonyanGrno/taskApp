const numArr = [4, 4, 4, 5, 6, 7, 7, 7, 8, 9, 11, 11, 15, 18, 20];

function hasSum(arr, num) {
  let startIndex = 0;
  let endIndex = arr.length - 1;

  if (arr[0] >= num || arr[endIndex] + arr[endIndex - 1] < num) return false;

  while (startIndex < endIndex) {
    if (arr[startIndex] + arr[endIndex] === num) return true;
    if (arr[startIndex] + arr[endIndex] < num) startIndex++;
    else endIndex--;
  }
  return false;
}

hasSum(numArr, 18);
