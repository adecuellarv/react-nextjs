import React, { Fragment, useEffect, useState } from "react";
import Award from "../award";
import { selectItem, getNewPosition, getDisplayedAwards } from "./helpers";
import './styles.scss';

interface WheelListProps {
  listAward: number[];
  startGame: boolean;
}

const WheelList: React.FC<WheelListProps> = ({ listAward, startGame }) => {
  const [awardSelected, setAwardSelected] = useState<number>(0);
  const [correct, setCorrect] = useState<number>(3);

  useEffect(() => {
    if (startGame) {
      const item = selectItem(listAward);
      setCorrect(item);
      setAwardSelected(item);
    }
  }, [startGame, listAward]);

  useEffect(() => {
    if (listAward.length && startGame) {
      const intervalId = setInterval(() => {
        setAwardSelected((prevSelected) => getNewPosition(listAward, prevSelected));
      }, 200);

      const timeoutId = setTimeout(() => {
        clearInterval(intervalId);
        setAwardSelected(correct);
      }, 5000);

      return () => {
        clearInterval(intervalId);
        clearTimeout(timeoutId);
      };
    }
  }, [listAward, startGame, correct]);

  return (
    <Fragment>
      <div className="flex justify-center items-center">
        <div className="relative h-[243px] w-[150px] overflow-hidden flex flex-col items-center slot-machine">
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
