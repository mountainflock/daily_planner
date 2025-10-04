import "./eveningBoard.css";
import arrow from "../../assets/arrow.svg";

const EveningCardList = () => {
  const eveningTodos = [
    "Дневник",
    "Умываюсь",
    "Переодеваюсь",
    "Постель",
    "Чтение",
    "6 минут",
  ];

  return (
    <div className="eveningCards">
      {eveningTodos.map((todo, i) => (
        <>
          <div className="eveningTodo" key={eveningTodos[i]}>
            {todo}
          </div>
          {i < eveningTodos.length - 1 && (
            <div className="arrowDiv">
              <img src={arrow} alt="" />
            </div>
          )}
        </>
      ))}
    </div>
  );
};

export default EveningCardList;
