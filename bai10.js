//10a
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

