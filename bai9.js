//9a
function longestIncreaseSubArray(array) {
    let result = [];
    let temp = [array[0]];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > array[i - 1]) {
            temp.push(array[i]);
        } else {
            if (temp.length > result.length) {
                result = temp;
            }
            temp = [array[i]];
        }
    }
    if (temp.length > result.length) {
        result = temp;
    }
    return result;
}

//9b
function sortString(string, isIncrease) {
    for (let i = 0; i < string.length - 1; i++) {
        for (let j = i + 1; j < string.length; j++) {
            if (isIncrease && string[i] > string[j] || !isIncrease && string[i] < string[j]) {
                let temp = string[i];
                string[i] = string[j];
                string[j] = temp;
            }
        }
    }
}