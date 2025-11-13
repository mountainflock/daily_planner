// import radioButtonUnchecked from "../../assets/radioButtonUnchecked.svg";
// import radioButtonChecked from "../../assets/radioButtonChecked.svg";
import add from "../../assets/add.svg";
import "./todayTasks.css";
import { useState } from "react";
import TodayTaskInput from "../dailyTaskInput/todayTaskInput";

const DailyTasks = () => {
  const [dailyTasks, setDailyTasks] = useState([
    { id: 0, title: "Task 1", isDone: false },
    { id: 1, title: "Task 2", isDone: false },
    { id: 2, title: "Task 3", isDone: false },
    { id: 3, title: "Task 4", isDone: false },
    { id: 4, title: "Task 5", isDone: false },
  ]);

  // const toggleTaskStatus = (id) => {
  //   setDailyTasks((previousTasks) =>
  //     previousTasks.map((task) =>
  //       task.id === id ? { ...task, isDone: !task.isDone } : task
  //     )
  //   );
  // };

  const addDailyTask = (title) => {
    setDailyTasks((prevState) => [
      ...prevState,
      { id: 5, title, isDone: false },
    ]);
  };

  return (
    <div className="dailyTasks">
      <p>Задачи на день</p>
      {dailyTasks.map((task, i) => (
        <div
          key={i}
          className={task.isDone === false ? "incompleteTask" : "completeTask"}
        >
          {task.isDone ? (
            <div className="checkButtonDiv">
              {/* <img
                src={radioButtonChecked}
                alt=""
                onClick={() => toggleTaskStatus(task.id)}
              /> */}
            </div>
          ) : (
            <div className="checkButtonDiv">
              {/* <img
                src={radioButtonUnchecked}
                alt=""
                onClick={() => toggleTaskStatus(task.id)}
              /> */}
            </div>
          )}
          <div className="taskTitle">
            <TodayTaskInput title={task.title} isDone={task.isDone} />
          </div>
        </div>
      ))}
      <div className="taskButtons">
        <button className="addButton" onClick={addDailyTask}>
          {<img src={add} alt="" />}
        </button>
        <button className="deleteCompletedButton">удалить завершенные</button>
      </div>
    </div>
  );
};

export default DailyTasks;
