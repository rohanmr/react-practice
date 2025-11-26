const express = require("express")
require("dotenv").config()
const cors = require("cors")

const dashboardRouter = require('./routes/dashboardRoutes')
const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json())



app.use("/api", dashboardRouter)


app.listen(port || 5000, () => {
    console.log(`Server Running http://localhost:${port}`)
})