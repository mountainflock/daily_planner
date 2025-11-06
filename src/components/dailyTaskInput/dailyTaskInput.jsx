import { useState } from "react";
import PropTypes from "prop-types";

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

  return (
    <>
      {editing ? (
        <input
          value={currentTask}
          onChange={handleChange}
          onBlur={handleBlur}
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
