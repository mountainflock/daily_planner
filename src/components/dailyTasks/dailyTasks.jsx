import "./dailyTasks.css";
import Task from "../task/task";
// import Task from "../task/task";
// import { useState } from "react";

const DailyTasks = () => {
  const dailyTasks = ["Учеба", "Отдых"];

  return (
    <div className="dailyTasks">
      <h3>Задачи на день</h3>
      {dailyTasks.map((task, i) => (
        <Task key={i} title={task} />
      ))}
    </div>
  );
};

export default DailyTasks;
