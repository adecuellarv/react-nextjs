import React, { Fragment, useEffect, useState } from "react";
import Award from "../award";
import { selectItem, getNewPosition, getDisplayedAwards } from "./helpers";
import { TIMER, SPEED } from "@/app/common/constants";
import './styles.scss';

interface WheelListProps {
  listAward: number[];
  startGame: boolean;
  simulateWin: boolean;
  addCorrect: any;
}

const WheelList: React.FC<WheelListProps> = ({ listAward, startGame, simulateWin, addCorrect }) => {
  const [awardSelected, setAwardSelected] = useState<number>(0);
  const [correct, setCorrect] = useState<number>(3);

  useEffect(() => {
    if (startGame) {
      if (!simulateWin) {
        const item = selectItem(listAward);
        setCorrect(item);
        setAwardSelected(item);
        addCorrect(item);
      } else {
        setCorrect(3);
        setAwardSelected(3);
        addCorrect(3);
      }
    }
  }, [startGame, listAward]);

  useEffect(() => {
    if (listAward.length && startGame) {
      const intervalId = setInterval(() => {
        setAwardSelected((prevSelected) => getNewPosition(listAward, prevSelected));
      }, SPEED);

      const timeoutId = setTimeout(() => {
        clearInterval(intervalId);
        setAwardSelected(correct);
      }, TIMER);

      return () => {
        clearInterval(intervalId);
        clearTimeout(timeoutId);
      };
    }
  }, [listAward, startGame, correct]);

  return (
    <Fragment>
      <div className="flex justify-center items-center">
        <div className="relative h-[332px] w-[150px] overflow-hidden flex flex-col items-center slot-machine">
          {!!listAward.length && getDisplayedAwards(listAward, awardSelected).map(({ value, index }) => (
            <Award
              value={value}
              key={index}
              selected={awardSelected}
              position={index}
              correct={correct}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default WheelList;
