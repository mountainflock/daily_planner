import "./morningBoard.css";
import arrow from "../../assets/arrow.svg";

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
        <>
          <div className="morningTodo" key={i}>
            {todo}
          </div>
          {i < morningTodos.length - 1 && <img src={arrow} alt="" />}
        </>
      ))}
    </div>
  );
};

export default MorningCardList;
