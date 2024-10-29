import React, { Fragment, useEffect, useState } from "react";
import Award from "../award";
import { selectItem, getNewPosition } from "./helpers";

interface WheelListProps {
  listAward: number[]
  startGame: boolean
}

const WheelList: React.FC<WheelListProps> = ({ listAward, startGame }) => {
  const [awardSelected, setAwardSelected] = useState<number>(3);
  const [correct, setCorrect] = useState<number>(3);

  useEffect(() => {
    if (startGame) {
      setCorrect(selectItem(listAward))
    }
  }, [startGame, listAward]);

  useEffect(() => {
    if (awardSelected && listAward.length) {
      const intervalId = setInterval(() => {
        const currentCardIndex = getNewPosition(listAward, awardSelected);
        console.log('#awardSelected', awardSelected, '#currentCardIndex', currentCardIndex);
        setAwardSelected(currentCardIndex);
      }, 1000);

      // Destruir el intervalo después de 6 segundos
      const timeoutId = setTimeout(() => {
        clearInterval(intervalId);
      }, 6000);

      // Limpiar ambos intervalos en el cleanup
      return () => {
        clearInterval(intervalId);
        clearTimeout(timeoutId);
      };
    }
  }, [awardSelected, listAward]);


  return (
    <Fragment>
      <div>
        {!!listAward.length && listAward.map((i, key) => {
          return (
            <Award
              value={i}
              key={key}
              selected={awardSelected}
              position={key}
              correct={correct}
            />
          )
        })
        }
      </div>
    </Fragment>
  )
};

export default WheelList;