var temp=require('./tempratureCoverter')


console.log("Temperature in Fahrenheit: " + temp.temptoFaren(30));
console.log("Temperature in Celsius: " + temp.temptocelsius(86));

console.log("Converted Temperature: " + temp.convertTemperature(30, 'C') + " Fahrenheit");
console.log("Converted Temperature: " + temp.convertTemperature(86, 'F') + " Celsius");