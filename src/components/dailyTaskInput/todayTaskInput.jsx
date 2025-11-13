import { useState } from "react";
import PropTypes from "prop-types";
import "./todayTaskInput.css";

const TodayTaskInput = ({ title, isDone }) => {
  const [currentTask, setCurrentTask] = useState(title);
  const [editing, setEditing] = useState(false);

  const handleClick = () => {
    if (!isDone) setEditing(true);
  };

  const handleChange = (e) => {
    setCurrentTask(e.target.value);
  };

  const handleBlur = (e) => {
    setCurrentTask(e.target.value);
    setEditing(false);
  };

  const handleEnter = (e) => {
    e.key === "Enter" && setEditing(false);
  };

  return (
    <>
      {editing ? (
        <input
          value={currentTask}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={handleEnter}
        ></input>
      ) : (
        <div onClick={handleClick}>{currentTask}</div>
      )}
    </>
  );
};

TodayTaskInput.propTypes = {
  title: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
};

export default TodayTaskInput;
