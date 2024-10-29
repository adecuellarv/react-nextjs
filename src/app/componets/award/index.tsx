import React, { Fragment } from "react";

interface AwardProps {
  value: number
  selected?: number
}

const Award: React.FC<AwardProps> = ({ value, selected }) => {
  return (
    <Fragment>
      <div>
        {value} - selected: {selected}
      </div>
    </Fragment>
  )
}

export default Award;