//4a
function reverseString(str) {
    
    let length = 0;
    while (str[length] !== undefined) {
        length++;
    }
    
    let reversedArray = [];
    for (let i = length - 1; i >= 0; i--) {
        reversedArray.push(str[i]);
    }

    let reversedString = '';
    for (let i = 0; i < reversedArray.length; i++) {
        reversedString += reversedArray[i];
    }
    return reversedString;
}

const inputString = "Hello, World!"; 
const reversedString = reverseString(inputString);
console.log("Chuỗi gốc:", inputString);
console.log("Chuỗi đảo ngược:", reversedString);
//4b
function removeSpaces(str) {
    let result = '';
    let length = 0;
    
    while (str[length] !== undefined) {
        length++;
    }

    for (let i = 0; i < length; i++) {
        if (str[i] !== ' ') { 
            result += str[i];
        }
    }
    return result;
}
const text = "dfsd fgdsga h á à à dfger tfq "
const noneSpace = removeSpaces(text)
console.log(noneSpace)

//4c
function isPalindrome(str) {
    let length = 0;
    while (str[length] !== undefined) {
        length++;
    }
    for (let i = 0; i < Math.floor(length / 2); i++) {
        if (str[i] !== str[length - 1 - i]) {
            return false; 
        }
    }

    return true; 
}

const resultString = "madam";
console.log("Chuỗi", resultString, "có phải là chuỗi đối xứng không?", isPalindrome(resultString));
