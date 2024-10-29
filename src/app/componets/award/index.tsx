import React, { Fragment } from "react";
import './styles.scss';

interface AwardProps {
  value: number;
  selected?: number;
  position: number;
  correct: number;
}

const Award: React.FC<AwardProps> = ({ value, position, selected }) => {
  return (
    <Fragment>
      <div className={`award ${selected === position ? 'selected' : ''}`}>
        <div className={`award-content ${selected === position ? 'animate' : ''}`}>
          <h1 className="text-black">{value}</h1>
        </div>
      </div>
    </Fragment>
  );
}

export default Award;
