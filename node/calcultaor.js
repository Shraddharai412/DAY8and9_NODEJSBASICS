function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}   
function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero is not allowed.";
    }
    return a / b;
}
function modulus(a, b) {
    return a % b;
}

module.exports={
    add,
    subtract,
    multiply,
    divide,
    modulus
}