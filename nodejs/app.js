const http = require("http")
const { addition, substraction, divsion } = require("./customCalculator")
const path = require("path")





const server = http.createServer((req, res) => {
    res.end("This is from node js Server.....!")
})

console.log(addition(2, 3), "Addition")
console.log(substraction(3, 2), "Substraction")
console.log(divsion(4, 2), "Division")


server.listen(5000, () => {
    console.log("Server started at 5000")
})