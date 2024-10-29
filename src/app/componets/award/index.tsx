import React, { Fragment } from "react";
import './styles.scss';
import img0 from '../../../../public/items/0.png';
import img1 from '../../../../public/items/1.png';
import img2 from '../../../../public/items/2.png';
import img3 from '../../../../public/items/3.png';
import img4 from '../../../../public/items/4.png';
import img5 from '../../../../public/items/5.png';
import img6 from '../../../../public/items/6.png';

interface AwardProps {
  value: number;
  selected?: number;
  position: number;
  correct: number;
}
const images = [img0, img1, img2, img3, img4, img5, img6];
const Award: React.FC<AwardProps> = ({ value, position, selected }) => {
  return (
    <Fragment>
      <div className={`award ${selected === position ? 'selected' : ''}`}>
        <div className={`award-content ${selected === position ? 'animate' : ''}`}>
          <h1 className="text-black">{value}</h1>
          <div className="text-center">
            <img className="w-[30px] m-auto" src={images[position].src} alt="img" />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Award;
