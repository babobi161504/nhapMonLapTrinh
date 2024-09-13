// 1a
function tinhTongCacSo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(tinhTongCacSo(5));

// 1b
function tinhUoc(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(tinhUoc(24));

//1c
function tinhTongCacChuSo(n) {
  let sum = 0;
  while (n > 0) {
    let i = n % 10;
    sum += i;
    n = Math.floor(n / 10);
  }
  return sum;
}
console.log(tinhTongCacChuSo(13423));

//1d
function printMaxNumber(n) {
  let maxNumber = 0;
  while (n !== 0) {
    let i = n % 10;
    if (maxNumber < i) {
      maxNumber = i;
    }
    n = Math.floor(n / 10);
  }
  return maxNumber;
}
console.log(printMaxNumber(328483459));






