//11a
function viTriSoLonNhat(arr) {
    let max = arr[0]; 
    let viTri = 0;
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            viTri = i;
        }
    }
    return viTri;
}
console.log("Vị trí của số lớn nhất là:", viTriSoLonNhat(arr)); 
//11b
function viTriSoNhoNhat(arr) {
    let min = arr[0]; 
    let viTri = 0;
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            viTri = i;
        }
    }
    return viTri;
}
console.log("Vị trí của số nhỏ nhất là:", viTriSoNhoNhat(arr)); 

//11c
function tongCacPhanTu(arr) {
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    
    return sum;
}

let arr = [3, 8, 1, 7, 9, 4, 2];

console.log("Tổng các phần tử trong mảng là:", tongCacPhanTu(arr)); 