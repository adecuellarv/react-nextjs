import React, { Fragment, useEffect, useState } from "react";
import WheelList from "../wheelList";
import { getArrayAwards } from "./helpers";
import './styles.scss';

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
      <div className="flex flex-row justify-center mt-[120px]">
        <div className="mx-1.5">
          <WheelList
            listAward={listAward}
            startGame={startGame}
          />
        </div>
        <div className="mx-1.5">
          <WheelList
            listAward={listAward}
            startGame={startGame}
          />
        </div>
        <div className="mx-1.5">
          <WheelList
            listAward={listAward}
            startGame={startGame}
          />
        </div>
      </div>
      <div className="text-center mt-20 cursor-pointer">
        <button onClick={handleStartGame} className="px-5  b bg-stone-50 rounded-md">Jugar</button>
      </div>
    </Fragment>
  )
};

export default SlotMachines;