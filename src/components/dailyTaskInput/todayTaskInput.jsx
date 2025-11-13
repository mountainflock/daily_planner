import { useState } from "react";
import PropTypes from "prop-types";
import "./todayTaskInput.css";

const TodayTaskInput = ({ title }) => {
  const [currentTask, setCurrentTask] = useState(title);
  const [editing, setEditing] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const handleClick = () => {
    if (!isDone) setEditing(true);
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

  const handleDone = (e) => {
    e.stopPropagation();
    setIsDone(!isDone);
    console.log(isDone);
  };

  const styles = {
    textDecoration: isDone ? "line-through" : "none",
    cursor: isDone ? "default" : "pointer",
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <input type="checkbox" checked={isDone} onChange={handleDone} />
      {editing ? (
        <input
          value={currentTask}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={handleEnter}
          autoFocus
        ></input>
      ) : (
        <div style={styles} onClick={handleClick}>
          {currentTask}
        </div>
      )}
    </div>
  );
};

TodayTaskInput.propTypes = {
  title: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
};

export default TodayTaskInput;
