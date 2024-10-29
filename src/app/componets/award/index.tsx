import React, { Fragment } from "react";

interface AwardProps {
  value: number
}

const Award: React.FC<AwardProps> = ({ value }) => {
  return (
    <Fragment>
      <div>
        {value}
      </div>
    </Fragment>
  )
}

export default Award;