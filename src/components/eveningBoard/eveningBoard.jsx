import "./eveningBoard.css";
import arrow from "../../assets/arrow.svg";

const EveningCardList = () => {
  const eveningTodos = [
    "Дневник",
    "Умываюсь",
    "Переодеваюсь",
    "Постель",
    "Молитва",
    "6 минут",
    "Сон",
  ];

  return (
    <div className="eveningCards">
      {eveningTodos.map((todo, i) => (
        <>
          <div className="eveningTodo" key={eveningTodos[i]}>
            {todo}
          </div>
          {i < eveningTodos.length - 1 && <img src={arrow} alt="" />}
        </>
      ))}
    </div>
  );
};

export default EveningCardList;
