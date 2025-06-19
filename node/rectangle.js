//custom module 

function rectangleArea(length, width) {
    return length * width;
}
function rectanglePerimeter(length, width) {
    return 2 * (length + width);
}
module.exports = {
    rectangleArea,
    rectanglePerimeter
};