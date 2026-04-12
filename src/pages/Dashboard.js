import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const user_id = localStorage.getItem("user_id");
  const navigate = useNavigate();

  useEffect(() => {
    if (!user_id) navigate("/login");
  }, [user_id, navigate]);

  const fetchTasks = async () => {
    const res = await axios.get(
      `http://localhost/task-manager/backend/get_tasks.php?user_id=${user_id}`
    );
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async () => {
    if (!task) return alert("Enter task");

    await axios.post(
      "http://localhost/task-manager/backend/add_task.php",
      { user_id, task_title: task }
    );

    setTask("");
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.get(
      `http://localhost/task-manager/backend/delete_task.php?id=${id}`
    );
    fetchTasks();
  };

  return (
    <div className="container">
      <h2>📋 Dashboard</h2>

      <input
        placeholder="Enter new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.length === 0 ? (
          <p>No tasks yet</p>
        ) : (
          tasks.map((t) => (
            <li key={t.id}>
              {t.task_title}
              <button onClick={() => deleteTask(t.id)}>Delete</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Dashboard;