"use client";
import React, { Fragment } from "react";
import Award from "../award";

interface WheelListProps {
  listAward: number[]
}

const WheelList: React.FC<WheelListProps> = ({ listAward }) => {
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