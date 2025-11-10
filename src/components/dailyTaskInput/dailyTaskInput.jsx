import { useState } from "react";
import PropTypes from "prop-types";
import "./dailyTaskInput.css";

const DailyTaskInput = ({ title }) => {
  const [currentTask, setCurrentTask] = useState(title);
  const [editing, setEditing] = useState(false);

  const handleClick = () => {
    setEditing(true);
  };

  const handleChange = (e) => {
    setCurrentTask(e.target.value);
  };

  const handleBlur = () => {
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

DailyTaskInput.propTypes = {
  title: PropTypes.string.isRequired,
};

export default DailyTaskInput;
