//3a

function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  if (n === 2) {
    return true;
  }
  if (n % 2 === 0) {
    return false;
  }
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(29));
console.log(isPrime(100));

//3b
function uocCuaSo(n) {
  let array = [];
  for (let i = 1; i < n; i++) {
    if (n % i == 0) {
      array.push(i);
    }
  }
  return array;
}

function tongUocCuaSo(uocCuaSo) {
  let sum = 0;
  for (let i = 0; i < uocCuaSo.length; i++) {
    sum += uocCuaSo[i];
  }
  return sum;
}

function isPerfectNumber(n) {
  const uocSo = uocCuaSo(n);
  const tongUoc = tongUocCuaSo(uocSo);

  if (n === tongUoc) {
    return n + " là số hoàn hảo";
  }
  return n + " không là số hoàn hảo";
}

console.log(isPerfectNumber(6));
console.log(isPerfectNumber(28));
console.log(isPerfectNumber(12));

//3c
function isPerfectSquare(n) {
  if (n < 0) return false;

  let x = 0;
  let square = 0;

  while (square < n) {
    x++;
    square = x * x;
  }

  return square === n;
}

console.log(isPerfectSquare(1)); // true
console.log(isPerfectSquare(16)); // true
console.log(isPerfectSquare(20)); // false

//3d
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}

function printPrimesUpToN(n) {
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

const n = 30;
printPrimesUpToN(n);
