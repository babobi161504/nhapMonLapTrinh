function sortArray(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

let arr = [12, 7, 5, 10, 11, 17];
sortArray(arr);
console.log(arr);
