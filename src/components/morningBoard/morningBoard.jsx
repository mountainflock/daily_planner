import "./morningBoard.css";
import arrow from "../../assets/arrow.svg";
import add from "../../assets/add.svg";
import { useState } from "react";

const MorningCardList = () => {
  const tasks = [
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
  const [morningTasks, setMorningTasks] = useState(tasks);
  const [inputIsOpen, setInputIsOpen] = useState(false);

  localStorage.setItem("morningTasks", JSON.stringify(morningTasks));
  const savedTasks = JSON.parse(localStorage.getItem("morningTasks"));

  const addMorningTask = (task) => {
    setMorningTasks(...task);
    console.log(morningTasks);
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
        <form>
          {" "}
          <input className="morningInput" type="text" />
          <button type="submit" onClick={addMorningTask}>
            save
          </button>
        </form>
      )}
    </div>
  );
};

export default MorningCardList;
