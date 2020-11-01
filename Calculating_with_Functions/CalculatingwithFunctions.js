

function definedRules(number, opérateur) {
    if (opérateur === undefined) { return number }
    if (typeof opérateur === 'string' && opérateur.includes('*') ) {
        const splitOpérateur = opérateur.split("")
        const numberToMultiply = splitOpérateur.pop()
        return  number * numberToMultiply
    }
    if (typeof opérateur === 'string' && opérateur.includes('/')) {
        const splitOpérateur = opérateur.split("")
        const numberToDivided = splitOpérateur.pop()
        return  number / numberToDivided
    }
    return number + opérateur
}


function zero(opérateur) {
    return definedRules(0, opérateur)
}
function one(opérateur) {
    return definedRules(1, opérateur)
} 
function two(opérateur) { 
    return definedRules(2, opérateur)
 }
function three(opérateur) { 
    return definedRules(3, opérateur)
 }
function four(opérateur) {
    return definedRules(4, opérateur)
}
function five(opérateur) {
    return definedRules(5, opérateur)
}
function six(opérateur) {
    return definedRules(6, opérateur)
}
function seven(opérateur) {
    return definedRules(7, opérateur)
}
function eight(opérateur) {
    return definedRules(8, opérateur)
}
function nine(opérateur) {
    return definedRules(9, opérateur)
}

function plus( number) {       
    return  + number
}
function minus( number) {       
    return  - number
}
function times(number) {
    return  '*' + number

}
function dividedBy(number) {
    return '/' + number
}

exports.zero = zero
exports.one = one
exports.two = two
exports.three = three
exports.four = four
exports.five = five
exports.six = six
exports.seven = seven
exports.eight = eight
exports.nine = nine
exports.plus = plus
exports.minus = minus
exports.times = times
exports.dividedBy = dividedBy

