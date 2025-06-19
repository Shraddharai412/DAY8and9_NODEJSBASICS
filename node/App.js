//custom module example 1

// const rect=require("./rectangle");
// console.log("Area of rectangle: " + rect.rectangleArea(5, 10));
// console.log("Perimeter of rectangle: " + rect.rectanglePerimeter(5, 10));

//custom module example 2
const fs = require("fs");
const readline = require("readline");
const cal = require("./calcultaor");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getUserInput(query) {
    return new Promise((resolve) => {
        r1.question(query, (input) => {
            resolve(input);
        });
    });
}

(async function main() {
    try {

        const num1 = parseInt(await getUserInput(" Enter first number: "));
        const num2 = parseInt(await getUserInput("Enter second number: "));
        const operator = await getUserInput("Enter operator (+, -, *, /, %): ");

  
        let result;
        switch (operator) {
            case "+":
                result = cal.add(num1, num2);
                break;
            case "-":
                result = cal.subtract(num1, num2);
                break;
            case "*":
                result = cal.multiply(num1, num2);
                break;
            case "/":
                result = cal.divide(num1, num2);
                break;
            case "%":
                result = cal.modulus(num1, num2);
                break;
            default:
                console.log(" Invalid operator");
                r1.close();
                return;
        }


        const output = ` ${num1} ${operator} ${num2} = ${result}`;
        console.log(output);
        

    } catch (err) {
        console.error(" Error:", err.message);
    } finally {
        r1.close();
    }
})();
