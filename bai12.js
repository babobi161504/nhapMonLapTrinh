//12a
function findMaxIn2DArray(array) {
    let max = array[0][0];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] > max) {
                max = array[i][j];
            }
        }
    }
    return max;
}

//12b
function findMinIn2DArray(array) {
    let min = array[0][0];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] < min) {
                min = array[i][j];
            }
        }
    }
    return min;
}

//12c
function sumOfRow(array, k) {
    let sum = 0;
    for (let i = 0; i < array[k].length; i++) {
        sum += array[k][i];
    }
    return sum;
}

function sumOfColumn(array, k) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i][k];
    }
    return sum;
}

//12d
function sumOfPrimeIn2DArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (isPrime(array[i][j])) {
                sum += array[i][j];
            }
        }
    }
    return sum;
}