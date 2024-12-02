//4a
function reverseString(str) {
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
}

const inputString = "Hello, World!";
const reversedString = reverseString(inputString);
console.log("Chuỗi gốc:", inputString);
console.log("Chuỗi đảo ngược:", reversedString);
//4b
function removeSpaces(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      result += str[i];
    }
  }
  return result;
}

const text = "dfsd fgdsga h á à à dfger tfq ";
const noneSpace = removeSpaces(text);
console.log(noneSpace);

//4c
function isPalindrome(str) {
  let length = 0;

  for (let i = 0; i < Math.floor(length / 2); i++) {
    if (str[i] !== str[length - 1 - i]) {
      return false;
    }
  }

  return true;
}
const resultString = "madam";
console.log(
  "Chuỗi",
  resultString,
  "có phải là chuỗi đối xứng không?",
  isPalindrome(resultString)
);

// 4d
function longestPalindrome(string) {
  let result = '';
  for (let i = 0; i < string.length; i++) {
      for (let j = i; j < string.length; j++) {
          let subString = getSubString(string, i, j + 1);
          if (isPalindrome(subString) && subString.length > result.length) {
              result = subString;
          }
      }
  }
  return result;
}