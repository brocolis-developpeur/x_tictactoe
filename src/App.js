import React, { useState } from "react";
import CreateGrid from "./components/CreateGrid";
import DisplayReset from "./components/DisplayReset";
// import Communicate2 from "./components/Communicate2";
import Communicate from "./components/Communicate";
import "./App.css";

const thegrid = size => {
  let tab = [];
  for (let i = 0; i < size; i++) {
    let subtab = [];
    for (let j = 0; j < size; j++) {
      subtab.push(-10);
    }
    tab.push(subtab);
  }
  return tab;
};

const App = () => {
  const [TTT, setTTT] = useState({
    grid: thegrid(12),
    player: "X",
    size: 12,
    victory: 4,
    scoreX: 0,
    scoreO: 0
  });
  return (
    <div className="App">
      <header>Giant TIC TAC TOE</header>
      <h3>
        X plays vs O <br></br>player gets 1 point per aligment vertical
        horizontal or diagonal{" "}
      </h3>
      <Communicate TTT={TTT} setTTT={setTTT} />

      <div className="game">
        <div className="sidemenu">
          <div className="conditions">
            <h2>1 point per align {TTT.victory} </h2>

            <h2>Currentplayer: {TTT.player}</h2>
          </div>
          <div className="score">
            <h2>Score</h2>
            <h2>X: {TTT.scoreX}</h2>
            <h2>O: {TTT.scoreO}</h2>
          </div>

          <DisplayReset
            // win={TTT.win}
            reset={params => {
              setTTT({
                grid: thegrid(params.size),
                player: "X",
                size: params.size,
                victory: params.victory,
                scoreX: 0,
                scoreO: 0
              });
            }}
          ></DisplayReset>
        </div>

        <div className="board">
          <CreateGrid TTT={TTT} setTTT={setTTT} />
        </div>
      </div>
    </div>
  );
};

export default App;
