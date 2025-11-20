const express = require("express")
const taskController = require("../controller/taskController")

const router = express.Router()

router.post("/createTask", taskController.createTask)
router.get("/get-all-task", taskController.getAllTask)



module.exports = router