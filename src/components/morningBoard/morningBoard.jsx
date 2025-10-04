import "./morningBoard.css";
import arrow from "../../assets/arrow.svg";
import add from "../../assets/add.svg";
import { useState } from "react";

const MorningCardList = () => {
  // const [morningTasks, setMorningTasks] = useState(savedTasks);
  const [inputIsOpen, setInputIsOpen] = useState(false);
  const morningTasks = [
    "Вода",
    "6 минут",
    "Постель",
    "Переодеваюсь",
    "Умываюсь",
    "Завтрак",
    "Тренировка",
    "Душ",
    "Ревитоника",
    "Планирование дня",
  ];

  localStorage.setItem("morningTasks", JSON.stringify(morningTasks));
  const savedTasks = JSON.parse(localStorage.getItem("morningTasks"));

  const addMorningTask = (task) => {
    morningTasks.push(task);
  };

  return (
    <div className="morningCards">
      {savedTasks.map((todo, i) => (
        <>
          <div className="morningTodo" key={i}>
            {todo}
          </div>
          {i < morningTasks.length - 1 && (
            <div className="arrowDiv">
              <img src={arrow} alt="" />
            </div>
          )}
        </>
      ))}
      <button>
        {
          <img
            src={add}
            alt=""
            onClick={() => {
              setInputIsOpen(true);
            }}
          />
        }
      </button>
      {inputIsOpen && (
        <input
          className="morningInput"
          type="text"
          onKeyDown={addMorningTask}
        />
      )}
    </div>
  );
};

export default MorningCardList;
