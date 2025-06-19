exports.temptoFaren=(tempincelsius)=> {
    return ((9/5) * tempincelsius + 32).toFixed(2);
}
exports.temptocelsius=(tempinfaren)=> {
    return ((tempinfaren -32)*(5/9)).toFixed(2);
}

// if in celsius then convert to fahrenheit and if in fahrenheit then convert to celsius
exports.convertTemperature = (temp, unit) => {
    if (unit.toLowerCase() === 'c') {
        return exports.temptoFaren(temp);
    } else if (unit.toLowerCase() === 'f') {
        return exports.temptocelsius(temp);
    } else {
        throw new Error('Invalid temperature unit. Use "Celsius" or "Fahrenheit".');
    }
}