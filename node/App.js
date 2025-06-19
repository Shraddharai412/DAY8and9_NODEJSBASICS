//custom module example 1

// const rect=require("./rectangle");
// console.log("Area of rectangle: " + rect.rectangleArea(5, 10));
// console.log("Perimeter of rectangle: " + rect.rectanglePerimeter(5, 10));

//custom module example 2

const cal=require("./calcultaor");
console.log("ADDITON: " + cal.add(5, 3));
console.log("SUBTRACTION: " + cal.subtract(5, 3));  
console.log("MuLTIPLICATION: " + cal.multiply(5, 3));
console.log("DIVISION: " + cal.divide(5, 3));   
console.log("MODULUS: " + cal.modulus(5, 3));
console.log("DIVISION BY ZERO: " + cal.divide(5, 0)); 

//using user inputs
const fs = require("fs");
const { parse,resolve } = require("path");
const{promiseHooks}=require("v8");

const readline = require("readline");
const r1=readline({input:process.stdin,output:process.stdout});
function getUserInput(query) {
    return new Promise((resolve) => {
        r1.question(query, (input) => {
            resolve(input);
        });
    });
}
const num1=parseInt(await getUserInput("Enter first number: "));
const num2=parseInt(await getUserInput("Enter second number: "));
const operator=await getUserInput("Enter operator (+, -, *, /, %): ");
switch (operator) {
    case "+":
        console.log("Result: " + cal.add(num1, num2));
        break;
    case "-":
        console.log("Result: " + cal.subtract(num1, num2));
        break;
    case "*":
        console.log("Result: " + cal.multiply(num1, num2));
        break;
    case "/":
        console.log("Result: " + cal.divide(num1, num2));
        break;
    case "%":
        console.log("Result: " + cal.modulus(num1, num2));
        break;
    default:
        console.log("Invalid operator");
}   
const output=`${num1} ${operator} ${num2} = ${cal[operator](num1, num2)}`;
console.log(output);
fs.appendFile("cal.txt",output+"\n");
r1.close();