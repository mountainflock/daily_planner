import "./dailyTasks.css";
// import Task from "../task/task";
// import { useState } from "react";

const DailyTasks = () => {
  const dailyTasks = ["Учеба", "Отдых"];

  return (
    <div className="dailyTasks">
      <h3>Задачи на день</h3>
      {dailyTasks.map((task, i) => (
        <div key={dailyTasks[i]}>{task}</div>
      ))}
    </div>
  );
};

export default DailyTasks;
