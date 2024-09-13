//10a
// thuật toán Euclid
// ví dụ
//Tìm ƯCLN của 48 và 18 bằng thuật toán Euclid
   // Bước 1: a = 48, b = 18
   // 48 % 18 = 12, do đó: a = 18, b = 12
   // Bước 2: a = 18, b = 12
   // 18 % 12 = 6, do đó: a = 12, b = 6
   // Bước 3: a = 12, b = 6
   // 12 % 6 = 0, do đó: a = 6, b = 0 (đến 0 thì stop)
   // Kết quả là 6, ƯCLN của 48 và 18 là 6.
   // tà vãi
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

const a = 48; 
const b = 18; 

console.log("Ước chung lớn nhất của", a, "và", b, "là:", gcd(a, b));

//10b
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}


console.log("Bội chung nhỏ nhất của", a, "và", b, "là:", lcm(a, b));

