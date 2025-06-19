function mul(a,b)
{
    return a*b;
}
function add(a,b)
{
    return a+b;
}

console.log("multiply   " + mul(2,3));
console.log("add   " +add(2,3));

const sub = (a,b) => {
    return a-b;
}

console.log("subtraction   " + sub(5,3));


//String Functions

var s="Welcome to Node.js";
var s1='hello world';
var s2=['hello','reactjs','nodejs','expressjs'];

console.log(s);
console.log(s1);
console.log(s2);
console.log("Concatuination Using + operator: " + s + " " + s1);
console.log("concatenation Using concat() method: " + s.concat(" ", s1));
console.log("Split String : " , s1.split( ))
console.log("join String : " , s2.join(" , "));
console.log("Char at index 5: " + s.charAt(5));
