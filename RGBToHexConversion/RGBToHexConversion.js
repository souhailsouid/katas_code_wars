function checkValidValues(number) {
    if (number < 0 || number > 255) {
        return 'invalid number'
    }   return number 
}
function arrayOfRGB(arr) {
    return arr.map(number => checkValidValues(number))
}
function indexOfInvalidNumber(arr) {
    return arrayOfRGB(arr).indexOf("invalid number") 
}
function isolatedValidNumber(arr) {
    return arr.filter((number) => checkValidValues(number) !== "invalid number")
}
function indexOfClosestvalidNumber(arr) {
    return arr.findIndex((number) =>checkValidValues(number) !== "invalid number" ) 
}
function replaceInvalidNumber(arr) {
    arr[indexOfInvalidNumber(arr)] = arr[indexOfClosestvalidNumber(arr)]
    return arr
}


function rgbToHex (rgb) { 
    var hex = rgb.toString(16);
    if (hex.length < 2) {
         hex = "0" + hex;
    }
    return hex;
}
function colors(color) {
    return rgbToHex(color).toUpperCase()       
}
function fullColorHex(red, green, blue) {  
    const combinedColors = colors(red) + colors(green) + colors(blue)
    return combinedColors
};
function rgb(r, g, b) {
    return fullColorHex(r,g,b)
}


exports.rgb = rgb 
exports.checkValidValues = checkValidValues
exports.indexOfInvalidNumber = indexOfInvalidNumber
exports.isolatedValidNumber = isolatedValidNumber
exports.indexOfClosestvalidNumber = indexOfClosestvalidNumber
exports.replaceInvalidNumber = replaceInvalidNumber
exports.rgbToHex = rgbToHex 
exports.colors = colors
exports.fullColorHex = fullColorHex