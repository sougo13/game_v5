import fruit1 from "../assets/Game1/friuits/1.png";
import fruit2 from "../assets/Game1/friuits/2.png";
import fruit3 from "../assets/Game1/friuits/3.png";
import fruit4 from "../assets/Game1/friuits/4.png";
import fruit5 from "../assets/Game1/friuits/5.png";
import fruit6 from "../assets/Game1/friuits/6.png";
import fruit7 from "../assets/Game1/friuits/7.png";
import fruit8 from "../assets/Game1/friuits/8.png";
import fruit9 from "../assets/Game1/friuits/9.png";
import fruit10 from "../assets/Game1/friuits/10.png";
import fruit11 from "../assets/Game1/friuits/11.png";
import fruit12 from "../assets/Game1/friuits/12.png";

import veg1 from "../assets/Game1/vegetables/1.png";
import veg2 from "../assets/Game1/vegetables/2.png";
import veg3 from "../assets/Game1/vegetables/3.png";
import veg4 from "../assets/Game1/vegetables/4.png";
import veg5 from "../assets/Game1/vegetables/5.png";
import veg6 from "../assets/Game1/vegetables/6.png";
import veg7 from "../assets/Game1/vegetables/7.png";
import veg8 from "../assets/Game1/vegetables/8.png";
import veg9 from "../assets/Game1/vegetables/9.png";
import veg10 from "../assets/Game1/vegetables/10.png";
import veg11 from "../assets/Game1/vegetables/11.png";
import veg12 from "../assets/Game1/vegetables/12.png";
import veg13 from "../assets/Game1/vegetables/13.png";
import veg14 from "../assets/Game1/vegetables/14.png";

export enum ElemType {
  fruit,
  veg,
}

const shuffle = <T>(array: T[]): T[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};

export type TElemType = {
  src: string;
  type: ElemType;
};

export const getElements = (stage: number) => {
  let fIndex = 0;
  let fCount = 3;

  let vIndex = 0;
  let vCount = 2;

  if (stage === 1) {
    fIndex = 3;
    fCount = 5;

    vIndex = 2;
    vCount = 5;
  }

  if (stage === 2) {
    fIndex = 5;
    fCount = 8;

    vIndex = 5;
    vCount = 7;
  }

  if (stage === 3) {
    fIndex = 8;
    fCount = 10;

    vIndex = 7;
    vCount = 10;
  }

  const fruits: TElemType[] = fruitsArr
    .slice(fIndex, fCount)
    .map((elem) => ({ src: elem, type: ElemType.fruit }));

  const vegs: TElemType[] = vegArr
    .slice(vIndex, vCount)
    .map((elem) => ({ src: elem, type: ElemType.veg }));

  const res: TElemType[] = shuffle([...fruits, ...vegs]);

  return res;
};

export const fruitsArr = [
  fruit1,
  fruit2,
  fruit3,
  fruit4,
  fruit5,
  fruit6,
  fruit7,
  fruit8,
  fruit9,
  fruit10,
  fruit11,
  fruit12,
];

export const vegArr = [
  veg1,
  veg2,
  veg3,
  veg4,
  veg5,
  veg6,
  veg7,
  veg8,
  veg9,
  veg10,
  veg11,
  veg12,
  veg13,
  veg14,
];
