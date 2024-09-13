function inDayFibonacci(n) {
  if (n <= 0) {
    console.log("Số nguyên dương phải lớn hơn 0");
    return;
  }
  let fibo = [0, 1];
  console.log(fibo[0]);

  if (n > 1) {
    console.log(fibo[1]);
  }

  for (let i = 2; i < n; i++) {
    let nextFibo = fibo[i - 1] + fibo[i - 2];
    fibo.push(nextFibo);
    console.log(nextFibo);
  }
}
const n = 10;
inDayFibonacci(n);
