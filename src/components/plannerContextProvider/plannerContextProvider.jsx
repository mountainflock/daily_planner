import { useState, createContext } from "react";

export const plannerContext = createContext({
  undatedTasks: [],
  regularTasks: [],
  movies: [],
  books: [],
  toggleTaskStatus: () => {},
  deleteTask: () => {},
  clearCompletedTasks: () => {},
});

export const PlannerContextProvider = ({ children }) => {
  const toggleTaskStatus = (id) => {
    setDailyTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  const tasks = [
    [
      { id: 0, title: "Проба задания", isDone: false },
      { id: 1, title: "Продлить курс", isDone: false },
    ],
    [
      { id: 0, title: "Пилинг лицо", isDone: false },
      { id: 1, title: "Пилинг тело", isDone: false },
      { id: 2, title: "Пилинг волосы", isDone: false },
      { id: 3, title: "Педикюр", isDone: false },
      { id: 4, title: "Маникюр", isDone: false },
      { id: 5, title: "Уборка", isDone: false },
      { id: 6, title: "Уборка мыши", isDone: false },
      { id: 7, title: "Смена постельного", isDone: false },
    ],
    [
      { id: 0, title: "Быть присяжным", isDone: false },
      { id: 1, title: "Древо жизни", isDone: false },
      { id: 2, title: "Идеократия", isDone: false },
      { id: 3, title: "The Five Devils", isDone: false },
    ],
    [
      { id: 0, title: "Тысячеликий герой", isDone: false },
      { id: 1, title: "Книги Карен Хорни", isDone: false },
      { id: 2, title: "Симона де бовуар", isDone: false },
    ],
  ];
  const [undatedTasks, setUndatedTasks] = useState(tasks[0]);

  const [regularTasks, setRegularTasks] = useState(tasks[1]);

  const [movies, setMovies] = useState(tasks[2]);

  const [books, setBooks] = useState(tasks[3]);
};
