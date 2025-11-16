import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "./todayTaskInput.css";

const TodayTaskInput = ({ task, onSave, onEdit }) => {
  const [currentTask, setCurrentTask] = useState(task.title);
  const [isDone, setIsDone] = useState(false);

  const newElement = useRef(null);

  useEffect(() => {
    console.log(task.isEditing);
    if (task.isEditing && newElement.current) newElement.current.focus();
  }, [task.isEditing]);

  const handleSave = () => {
    onSave(task.id, newElement.current.value);
  };

  const handleChange = (e) => {
    setCurrentTask(e.target.value);
  };

  const handleDone = (e) => {
    e.stopPropagation();
    setIsDone(!isDone);
  };

  const styles = {
    textDecoration: isDone ? "line-through" : "none",
    cursor: isDone ? "default" : "pointer",
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <input type="checkbox" checked={isDone} onChange={handleDone} />
      {task.isEditing ? (
        <input
          value={currentTask}
          onChange={handleChange}
          onBlur={handleSave}
          onKeyDown={(e) => e.key === "Enter" && handleSave()}
          autoFocus
        ></input>
      ) : (
        <div style={styles} onClick={() => onEdit(task.id)}>
          {currentTask}
        </div>
      )}
    </div>
  );
};

TodayTaskInput.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    isDone: PropTypes.bool,
    isEditing: PropTypes.bool,
  }),
  onSave: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default TodayTaskInput;
