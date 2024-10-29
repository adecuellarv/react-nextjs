import React, { Fragment, useEffect, useState } from "react";
import WheelList from "../wheelList";
import { getArrayAwards } from "./helpers";
import { TIMER, ATTEMPTS_BEFORE_TO_SHOW_WIN } from "@/app/common/constants";
import './styles.scss';

let attempts = 0;
const SlotMachines = () => {
  const [listAward, setListAward] = useState<number[]>([]);
  const [startGame, setStartGame] = useState(false);
  const [simulateWin, setSimulateWin] = useState(false);

  const handleStartGame = () => {
    if (!startGame) {
      setStartGame(true);
      setTimeout(() => {
        setStartGame(false);
      }, TIMER);

      if (attempts === ATTEMPTS_BEFORE_TO_SHOW_WIN) {
        setSimulateWin(true);
        attempts = 0;
      } else {
        setSimulateWin(false);
        attempts++;
      }
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
            simulateWin={simulateWin}
          />
        </div>
        <div className="mx-1.5">
          <WheelList
            listAward={listAward}
            startGame={startGame}
            simulateWin={simulateWin}
          />
        </div>
        <div className="mx-1.5">
          <WheelList
            listAward={listAward}
            startGame={startGame}
            simulateWin={simulateWin}
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