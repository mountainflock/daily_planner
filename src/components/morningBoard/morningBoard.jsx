import "./morningBoard.css";

const MorningCardList = () => {
  const morningTodos = [
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

  return (
    <div className="morningCards">
      {morningTodos.map((todo, i) => (
        <div className="morningTodo" key={morningTodos[i]}>
          {todo}
        </div>
      ))}
    </div>
  );
};

export default MorningCardList;
