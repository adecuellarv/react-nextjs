import React, { Fragment, useEffect, useState } from "react";
import WheelList from "../wheelList";
import { getArrayAwards } from "./helpers";

const SlotMachines = () => {
  const [listAward, setListAward] = useState<number[]>([]);
  const [startGame, setStartGame] = useState(false);

  const handleStartGame = () => {
    if (!startGame) {
      setStartGame(true);

      setTimeout(() => {
        setStartGame(false);
      }, 6000);
    }
  }

  useEffect(() => {
    const resp = getArrayAwards();
    if (resp) setListAward(resp);
  }, []);

  return (
    <Fragment>
      <div className="flex flex-row justify-center">
        <div>
          <h1>Columna 1</h1>
          <WheelList
            listAward={listAward}
            startGame={startGame}
          />
        </div>
        <div>
          <h1>Columna 2</h1>
          <WheelList
            listAward={listAward}
            startGame={startGame}
          />
        </div>
        <div>
          <h1>Columna 3</h1>
          <WheelList
            listAward={listAward}
            startGame={startGame}
          />
        </div>
      </div>
      <div>
        <button onClick={handleStartGame}>Jugar</button>
      </div>
    </Fragment>
  )
};

export default SlotMachines;