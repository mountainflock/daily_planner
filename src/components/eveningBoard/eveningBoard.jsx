import "./eveningBoard.css";

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
        <div className="eveningTodo" key={eveningTodos[i]}>
          {todo}
        </div>
      ))}
    </div>
  );
};

export default EveningCardList;
