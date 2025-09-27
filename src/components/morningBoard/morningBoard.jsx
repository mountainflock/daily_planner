import "./morningBoard.css";
import arrow from "../../assets/arrow.svg";
import add from "../../assets/add.svg";
import { useState } from "react";

const MorningCardList = () => {
  // const [morningTasks, setMorningTasks] = useState(savedTasks);
  const [inputIsOpen, setInputIsOpen] = useState(false);
  const morningTasks = [
    "Пробуждение",
    "Вода",
    "6 минут",
    "Молитва",
    "Фото",
    "Постель",
    "Переодеваюсь",
    "Умываюсь",
    "Зарядка",
    "Завтрак",
    "Душ",
    "Ревитоника",
    "Отдых, медитация",
    "Планер",
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
          {i < morningTasks.length - 1 && <img src={arrow} alt="" />}
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
