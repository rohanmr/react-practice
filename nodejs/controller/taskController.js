let tasks = [];

// CREATE TASK
const createTask = (req, res) => {
    try {
        const newTask = {
            id: Date.now(), // number
            title: req.body.title,
            description: req.body.description,
            isComplete: false
        };

        tasks.push(newTask);

        res.status(201).send({
            msg: "Task created successfully",
            success: true,
            task: newTask
        });

    } catch (error) {
        res.status(500).send({ msg: "Internal Server Error" });
    }
};


// GET ALL TASKS
const getAllTask = (req, res) => {
    try {
        res.status(200).send({
            tasks: tasks,
            success: true
        });

    } catch (error) {
        res.status(500).send({ msg: "Internal Server Error" });
    }
};


// GET TASK BY ID
const getTaskById = (req, res) => {
    try {
        const id = Number(req.params.ID);
        const task = tasks.find((t) => t.id === id);

        if (!task) {
            return res.status(404).send({ msg: "Task not found" });
        }

        res.status(200).send({ task: task, success: true });

    } catch (error) {
        res.status(500).send({ msg: "Internal Server Error" });
    }
};


// DELETE TASK
const deleteTask = (req, res) => {
    try {
        const id = Number(req.params.ID);


        tasks = tasks.filter((t) => t.id !== id);


        res.status(200).send({ msg: "Task deleted successfully", success: true });

    } catch (error) {
        res.status(500).send({ msg: "Internal Server Error" });
    }
};

module.exports = { createTask, getAllTask, getTaskById, deleteTask };
