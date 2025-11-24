const tasks = []

const createTask = (req, res) => {
    try {

        const newTask = {
            id: Date.now(),
            title: req.body.title,
            description: req.body.description,
            isComplete: false
        }

        tasks.push(newTask)

        res.status(201).send({ mes: "Task Created Succesfully", success: true })


    } catch (error) {
        res.status(500).send({ mes: "Internal Server Error" })

    }
}


const getAllTask = (req, res) => {
    try {
        res.status(200).send({ task: tasks, success: true })


    } catch (error) {
        res.status(500).send({ mes: "Internal Server Error" })

    }
}

const getTaskById = (req, res) => {
    try {
        const id = req.params.ID
        const task = tasks.find((t) => id == t.id)

        res.status(200).send({ task: task, })
    } catch (error) {
        res.status(500).send({ mes: "Internal Server Error" })
    }
}


module.exports = { createTask, getAllTask, getTaskById }