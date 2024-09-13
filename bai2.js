//2a
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
  
  //2b
  function maxSecondNumber(n) {
    let max = -1;
    let secondMax = -1;
    let digit;
    while (n > 0) {
      digit = n % 10;
      if (digit > max) {
        secondMax = max;
        max = digit;
      } else if (digit < max && digit > secondMax) {
        secondMax = digit;
      }
      n = Math.floor(n / 10);
    }
    if (secondMax === -1) {
      return "Không có số lớn thứ hai";
    }
    return secondMax;
  }
  console.log(maxSecondNumber(123724));
  console.log(maxSecondNumber(1111111));
  
  //2c
  function soNhoNhat(n) {
    let min = 9;
    while (n > 0) {
      i = n % 10;
      if (i < min) {
        min = i;
      }
      n = Math.floor(n / 10);
    }
    return min;
  }
  console.log(soNhoNhat(23857239));
  
  //2d
  
  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function findPrimesInArray(arr) {
    const primes = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (isPrime(arr[i])) {
        primes.push(arr[i]);
      }
    }
  
    if (primes.length === 0) {
      console.log("Không có số nguyên tố trong dãy.");
    } else {
      console.log("Các số nguyên tố trong dãy:", primes);
    }
  }
  const array = [12, 7, 5, 10, 11, 17, 18, 23, 1, 4];
  findPrimesInArray(array);  