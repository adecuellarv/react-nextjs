import React, { Fragment } from "react";

interface AwardProps {
  value: number
  selected?: number
}

const Award: React.FC<AwardProps> = ({ value, selected }) => {
  return (
    <Fragment>
      <div>
        <h1 className="text-white">{value} - selected: {selected}</h1>
      </div>
    </Fragment>
  )
}

export default Award;