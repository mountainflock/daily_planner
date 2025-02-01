// import { useState } from "react";
// import Card from "../../components/card/card";

import "./board.css";

import MorningBoard from "../morningBoard/morningBoard";
import EveningBoard from "../eveningBoard/eveningBoard";
import DailyTasks from "../dailyTasks/dailyTasks";

const Board = () => {
  return (
    <div className="board">
      <div className="title">
        {/* <h2 className="mainTitle">Daily planner</h2> */}
      </div>
      <div className="dailyTaskBoard">
        <MorningBoard />
        <DailyTasks />
        <EveningBoard />
      </div>
    </div>
  );
};
export default Board;
