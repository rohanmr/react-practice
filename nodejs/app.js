const express = require("express")
require('dotenv').config()


const app = express()

const port = process.env.PORT

app.use("/web", express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.get("/", (req, res) => {
    res.send("Hello From Server")
})

app.get("/home", (req, res) => {
    res.send("<h1>Hello From Express JS </h1>")
})

app.post("/contact", (req, res) => {
    console.log(req.body, "From Server")
    res.send("Contact Added Succesfully")

})



app.listen(port || 5001, () => {
    console.log(`Server Running On http://localhost:${port}`)
})
























// const http = require("http")
// const { addition, substraction, divsion } = require("./customCalculator")
// const path = require("path")

// const server = http.createServer((req, res) => {
//     res.end("This is from node js Server.....!")
// })

// console.log(addition(2, 3), "Addition")
// console.log(substraction(3, 2), "Substraction")
// console.log(divsion(4, 2), "Division")


// server.listen(5000, () => {
//     console.log("Server started at 5000")
// })