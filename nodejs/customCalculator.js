function addition(a, b) {
    return a + b
}

function substraction(a, b) {
    return a - b

}

function divsion(a, b) {
    if (b == 0) {
        return "Can't divide by zero"
    } else {
        return a / b

    }
}

module.exports = { addition, substraction, divsion }