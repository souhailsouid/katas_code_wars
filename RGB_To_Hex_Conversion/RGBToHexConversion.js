function isValidColor(number) {
    if (number < 0 || number > 255) {
        return 'invalid number'
    }
        return number 
}
function checkAndCorrectColor(number) {
    if (number < 0)  return 0
    if (number > 255)  return 255
    return number
}

function arrayOfRGB(arr) {
    return arr.map(number => isValidColor(number))
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
    const arrOfRGB = [r, g, b]
    if (arrayOfRGB(arrOfRGB).includes('invalid number')) {
        const colors = {
            red: checkAndCorrectColor(r),
            green: checkAndCorrectColor(g),
            blue: checkAndCorrectColor(b)
        }
        const {red, green, blue} = colors
        return fullColorHex(red, green, blue)
     }
    return fullColorHex(r,g,b)
}


exports.rgb = rgb 
exports.isValidColor = isValidColor
exports.checkAndCorrectColor = checkAndCorrectColor
exports.rgbToHex = rgbToHex 
exports.colors = colors
exports.fullColorHex = fullColorHex