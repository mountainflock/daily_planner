// import add from "../../assets/add.svg";
import "./todayTasks.css";
import { useState } from "react";
import TodayTaskInput from "../dailyTaskInput/todayTaskInput";
import { v4 as uuidv4 } from "uuid";

const DailyTasks = () => {
  const [dailyTasks, setDailyTasks] = useState([
    { id: uuidv4(), title: "Task 1", isDone: false, isEditing: false },
    { id: uuidv4(), title: "Task 2", isDone: false, isEditing: false },
    { id: uuidv4(), title: "Task 3", isDone: false, isEditing: false },
    { id: uuidv4(), title: "Task 4", isDone: false, isEditing: false },
    { id: uuidv4(), title: "Task 5", isDone: false, isEditing: false },
  ]);

  const addDailyTask = () => {
    setDailyTasks((prevState) => [
      ...prevState,
      { id: uuidv4(), title: "", isDone: false, isEditing: true },
    ]);
  };

  const handleEdit = (id) => {
    setDailyTasks((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, isEditing: true } : item
      )
    );
  };
  const handleSave = (id, newTitle) => {
    setDailyTasks((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, title: newTitle, isEditing: false } : item
      )
    );
  };

  const deleteCompletedTasks = () => {};

  return (
    <div className="dailyTasks">
      <p>Задачи на день</p>
      {dailyTasks.map((task) => (
        <div className="taskTitle" key={task.id}>
          <TodayTaskInput
            task={task}
            handleEdit={handleEdit}
            handleSave={handleSave}
          />
        </div>
      ))}
      <div className="taskButtons">
        <button className="addButton" onClick={addDailyTask}>
          fjeorwifj
          {/* {<img src={add} alt="" />} */}
        </button>
        <button
          className="deleteCompletedButton"
          onClick={deleteCompletedTasks}
        >
          удалить завершенные
        </button>
      </div>
    </div>
  );
};

export default DailyTasks;
