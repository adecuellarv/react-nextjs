import React, { Fragment, useEffect, useState } from "react";
import Award from "../award";
import { selectItem } from "./helpers";

interface WheelListProps {
  listAward: number[]
  startGame: boolean
}

const WheelList: React.FC<WheelListProps> = ({ listAward, startGame }) => {
  const [awardSelected, setAwardSelected] = useState<number>();

  useEffect(() => {
    if (startGame) setAwardSelected(selectItem(listAward))
    else if (listAward?.length) setAwardSelected(Math.round(listAward?.length / 2))
  }, [startGame, listAward]);

  console.log('#awardSelected', awardSelected)

  return (
    <Fragment>
      <div>
        {!!listAward.length && listAward.map((i, key) => {
          return (
            <Award
              value={i}
              key={key}
            />
          )
        })
        }
      </div>
    </Fragment>
  )
};

export default WheelList;