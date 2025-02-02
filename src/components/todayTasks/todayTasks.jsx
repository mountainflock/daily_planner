import radioButtonUnchecked from "../../assets/radioButtonUnchecked.svg";
import radioButtonChecked from "../../assets/radioButtonChecked.svg";
import add from "../../assets/add.svg";
import "./todayTasks.css";
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
        >
          {task.isDone === true ? (
            <img
              src={radioButtonChecked}
              alt=""
              onClick={() => toggleTaskStatus(task.id)}
            />
          ) : (
            <img
              src={radioButtonUnchecked}
              alt=""
              onClick={() => toggleTaskStatus(task.id)}
            />
          )}
          <div className="taskTitle">{task.title}</div>
        </div>
      ))}
      <div className="taskButtons">
        <button className="addButton">{<img src={add} alt="" />}</button>
        <button className="deleteCompletedButton">удалить завершенные</button>
      </div>
    </div>
  );
};

export default DailyTasks;
