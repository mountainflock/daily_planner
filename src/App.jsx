import { useState } from "react";
import Board from "./components/board/board";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Board />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
