import TaskManager from "./Components/Overview";
import List from "./Components/List";
import { useState } from "react";
import "./App.css";

const App = () => {
  let [tasks, setTasks] = useState(TaskManager.initialTasks);

  function addTask(e) {
    e.preventDefault();

    let taskInput = document.querySelector("#taskContent");
    let prioritySelect = document.querySelector("#priority");
    

    setTasks([
      ...tasks,
      TaskManager.createTask(TaskManager.nextId++, taskInput.value, prioritySelect.value),
    ]);
  }

  function markTaskAsDone(id) {
    let newTasks = tasks.map((t) => {
      if (id === t.id) {
        t.markDone();
      }
      return t;
    });
    setTasks(newTasks);
  }

  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <h1>To Do</h1>
      <form action="" onSubmit={addTask}>
        <input
          type="text"
          name="taskContent"
          id="taskContent"
          placeholder="Do something..."
          required
          aria-label="Add content for a task"
          title="Add content for a task"
        />
        <select name="priority" id="priority">
          <option value="0">None</option>
          <option value="1">Low</option>
          <option value="2">Medium</option>
          <option value="3">High</option>
        </select>
        <button type="submit">Add Task</button>
      </form>
      <List ordered>
        {tasks.sort((a,b) => b.priority - a.priority).map((t) => {
          return (
            <li key={t.id}
            className={`priority-${t.priority}`}>
              {t.content}{" "}
              <input
                type="checkbox"
                name="done"
                id={t.id + "done"}
                checked={t.done}
                onChange={() => markTaskAsDone(t.id)}
              />
            </li>
          );
        })}
      </List>
    </main>
  );
};

export default App;
