const express = require("express")
const taskController = require("../controller/taskController")

const router = express.Router()

router.post("/createTask", taskController.createTask)
router.get("/get-all-task", taskController.getAllTask)
router.get("/getTask/:ID",taskController.getTaskById)



module.exports = router