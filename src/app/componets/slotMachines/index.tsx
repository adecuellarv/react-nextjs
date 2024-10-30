import React, { Fragment, useEffect, useState } from "react";
import WheelList from "../wheelList";
import { getArrayAwards, allEqual } from "./helpers";
import { TIMER } from "@/app/common/constants";
import helpImg from '../../../../public/help.png';
import './styles.scss';

let arrayCorrects: any = [];
const SlotMachines = () => {
  const [listAward, setListAward] = useState<number[]>([]);
  const [startGame, setStartGame] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [simulateWin, setSimulateWin] = useState(false);
  const [winer, setWiner] = useState(false);

  const addCorrect = (item: number) => {
    arrayCorrects.push(item);
    console.log(arrayCorrects);
    if (arrayCorrects.length === 3) {
      if(allEqual(arrayCorrects)){
        setTimeout(() => {
          setWiner(true)
        }, TIMER + 600);
      }
    }
  }

  const handleSimulate = () => {
    setSimulateWin(true);
    setShowHelp(false);
    handleStartGame();
    setTimeout(() => {
      setSimulateWin(false);
    }, 100);
  }

  const handleStartGame = () => {
    if (!startGame) {
      setStartGame(true);
      setTimeout(() => {
        setStartGame(false);
      }, TIMER);
    }
    setShowHelp(false);
    arrayCorrects = []
  }

  useEffect(() => {
    const resp = getArrayAwards();
    if (resp) setListAward(resp);
  }, []);

  useEffect(() => {
    if (winer) {
      setTimeout(() => {
        setWiner(false);
      }, 2000);
    }
  }, [winer])

  return (
    <Fragment>
      <div className="flex flex-row justify-center mt-[120px] div-elements">
        <div className="mx-1.5">
          <WheelList
            listAward={listAward}
            startGame={startGame}
            simulateWin={simulateWin}
            addCorrect={addCorrect}
          />
        </div>
        <div className="mx-1.5">
          <WheelList
            listAward={listAward}
            startGame={startGame}
            simulateWin={simulateWin}
            addCorrect={addCorrect}
          />
        </div>
        <div className="mx-1.5">
          <WheelList
            listAward={listAward}
            startGame={startGame}
            simulateWin={simulateWin}
            addCorrect={addCorrect}
          />
        </div>
      </div>
      <div className="text-center mt-[40px] cursor-pointer">
        <button onClick={handleStartGame} className="px-5 bg-stone-50 rounded-md btn-play">Jugar</button>
      </div>
      <div className="absolute top-2 right-2 ">
        <img
          src={helpImg?.src}
          onClick={() => setShowHelp(!showHelp)}
          alt="help"
          className="w-[50px] cursor-pointer"
        />
        {showHelp &&
          <div className="absolute top-15 right-0 bg-white text-center py-2 px-5 w-[200px] rounded-md div-help">
            <p className="text-sm font-bold">¿No se deja?</p>
            <div className="cursor-pointer mt-2">
              <button
                onClick={handleSimulate}
                className="bg-sky-500/100 py-1 px-3 rounded-md text-white"
              >Simular ganar</button>
            </div>
          </div>
        }
      </div>
      {winer &&
        <div className="div-cap-winer">
          <div className="div-winer">
            <h1>¡Felicidades has ganado!</h1>
          </div>
        </div>
      }
    </Fragment>
  )
};

export default SlotMachines;