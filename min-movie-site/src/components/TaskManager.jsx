import React, { useEffect, useReducer, useState } from "react";
import { taskReducer } from "../reducer/taskReducer";

const TaskManager = () => {
  const [tasks, dispatch] = useReducer(taskReducer, [], () => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [todoText, setTodoText] = useState("");

  const addTask = () => {
    const trimmed = todoText.trim();
    if (trimmed === "") return;
    dispatch({ type: "ADD_TASK", payload: trimmed });
    setTodoText("");
  };

  const deleteTask = (id) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  };

  const editTask = (task) => {
    const newText = prompt("Edit task", task.text);
    if (newText === null) return;
    const trimmed = newText.trim();
    if (trimmed === "") return alert("Task cannot be empty");
    dispatch({ type: "EDIT_TASK", payload: { id: task.id, text: trimmed } });
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") addTask();
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg rounded-4">
            <div className="card-body">
              <h3 className="text-center mb-4">📝 My To-Do List</h3>

              <div className="input-group mb-3">
                <input
                  type="text"
                  id="taskInput"
                  className="form-control"
                  placeholder="Enter a new task..."
                  value={todoText}
                  onChange={(e) => setTodoText(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <button
                  onClick={addTask}
                  id="addTaskBtn"
                  className="btn btn-primary"
                >
                  Add Task
                </button>
              </div>

              <ul id="taskList" className="list-group">
                {tasks.length === 0 && (
                  <li className="list-group-item text-muted">No tasks yet.</li>
                )}
                {tasks.map((t) => (
                  <li
                    key={t.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <input
                        type="checkbox"
                        checked={t.completed}
                        onChange={() =>
                          dispatch({
                            type: "EDIT_TASK",
                            payload: {
                              id: t.id,
                              text: t.text,
                              completed: !t.completed,
                            },
                          })
                        }
                        style={{ marginRight: 8 }}
                      />
                      <span
                        style={{
                          textDecoration: t.completed ? "line-through" : "none",
                        }}
                      >
                        {t.text}
                      </span>
                    </div>

                    <div>
                      <button
                        onClick={() => editTask(t)}
                        className="btn btn-sm btn-outline-secondary me-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteTask(t.id)}
                        className="btn btn-sm btn-danger"
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskManager;
