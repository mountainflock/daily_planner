import "./dailyTasks.css";
import radioButtonUnchecked from "../../assets/radioButtonUnchecked.svg";
import radioButtonChecked from "../../assets/radioButtonChecked.svg";

import { useState } from "react";

const DailyTasks = () => {
  const [dailyTasks, setDailyTasks] = useState([
    { id: 0, title: "Учеба", isDone: false },
    { id: 1, title: "Отдых", isDone: false },
    { id: 2, title: "Заказать корм мышам", isDone: false },
    { id: 3, title: "Забрать заказ Озон", isDone: false },
    { id: 4, title: "Подрезать цветы", isDone: false },
  ]);

  const toggleTaskStatus = (id) => {
    setDailyTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  return (
    <div className="dailyTasks">
      <p>Задачи на день</p>
      {dailyTasks.map((task, i) => (
        <div
          key={i}
          className={task.isDone === false ? "incompleteTask" : "completeTask"}
          onClick={() => toggleTaskStatus(task.id)}
        >
          {task.isDone === true ? (
            <img src={radioButtonChecked} alt="" />
          ) : (
            <img src={radioButtonUnchecked} alt="" />
          )}
          <span className="taskTitle">{task.title}</span>
        </div>
      ))}
    </div>
  );
};

export default DailyTasks;
