"use client";
import React, { Fragment, useEffect, useState } from "react";
import WheelList from "../wheelList";
import { getArrayAwards } from "./helpers";

const SlotMachines = () => {
  const [listAward, setListAward] = useState<number[]>([]);

  useEffect(() => {
    const resp = getArrayAwards();
    if (resp) setListAward(resp);
  }, []);

  return (
    <Fragment>
      <div>
        <h1>Columna 1</h1>
        <WheelList
          listAward={listAward}
        />
      </div>
      <div>
        <h1>Columna 2</h1>
        <WheelList
          listAward={listAward}
        />
      </div>
      <div>
        <h1>Columna 3</h1>
        <WheelList
          listAward={listAward}
        />
      </div>
    </Fragment>
  )
};

export default SlotMachines;