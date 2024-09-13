const inputStr = "example string";
//8a
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) !== -1) {
            count++;
        }
    }
    return count;
}

const vowelCount = countVowels(inputStr);
console.log("Số nguyên âm:", vowelCount);

//8b
function countCharacterOccurrences(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}
const characterToCount = 'r'; 
const characterCount = countCharacterOccurrences(inputStr, characterToCount);
console.log(`Số lần xuất hiện của ký tự '${characterToCount}':`, characterCount);

//8c
function findMostFrequentCharacter(str) {
    const charCount = {};
    let maxCount = 0;
    let mostFrequentChar = '';

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        charCount[char] = (charCount[char] || 0) + 1;
        
        if (charCount[char] > maxCount) {
            maxCount = charCount[char];
            mostFrequentChar = char;
        }
    }
    return mostFrequentChar;
}

const mostFrequentChar = findMostFrequentCharacter(inputStr);
console.log("Ký tự xuất hiện nhiều nhất:", mostFrequentChar);