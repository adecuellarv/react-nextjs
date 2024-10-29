import React, { Fragment } from "react";

interface AwardProps {
  value: number
  selected?: number
  position: number
  correct: number
}

const Award: React.FC<AwardProps> = ({ value, position, selected, correct }) => {
  return (
    <Fragment>
      <div className={`bg-white rounded-md text-center border-b-4 ${position === selected ? 'p-6' : 'p-2'}`}>
        <h1 className="text-black">{value} - correct: {correct}</h1>
      </div>
    </Fragment>
  )
}

export default Award;