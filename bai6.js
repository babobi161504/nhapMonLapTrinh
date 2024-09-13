//6a
function tinhGiaiThua(n) {
    let giaiThua = 1;
    for (let i = 1; i <= n; i++) {
        giaiThua *= i;
    }
    return giaiThua;
}
const n = 5;
console.log("Giai thừa của", n, "là:", tinhGiaiThua(n));
//6b
function tinhTongChuSo(n) {
    let sum = 0;
    while (n > 0) {
        let digit = n % 10;
        sum += digit;    
        n = Math.floor(n / 10);  
    }
    return sum;
}
const m = 13423;
console.log("Tổng các chữ số của", m, "là:", tinhTongChuSo(m));
