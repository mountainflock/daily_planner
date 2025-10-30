import { useState } from "react";

const DailyTaskInput = () => {
  const [currentTask, setCurrentTask] = useState("");
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

export default DailyTaskInput;
