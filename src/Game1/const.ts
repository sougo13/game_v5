import fruit1 from "../assets/Game1/friuits/1.webp";
import fruit2 from "../assets/Game1/friuits/2.webp";
import fruit3 from "../assets/Game1/friuits/3.webp";
import fruit4 from "../assets/Game1/friuits/4.webp";
import fruit5 from "../assets/Game1/friuits/5.webp";
import fruit6 from "../assets/Game1/friuits/6.webp";
import fruit7 from "../assets/Game1/friuits/7.webp";
import fruit8 from "../assets/Game1/friuits/8.webp";
import fruit9 from "../assets/Game1/friuits/9.webp";
import fruit10 from "../assets/Game1/friuits/10.webp";
import fruit11 from "../assets/Game1/friuits/11.webp";
import fruit12 from "../assets/Game1/friuits/12.webp";

import veg1 from "../assets/Game1/vegetables/1.webp";
import veg2 from "../assets/Game1/vegetables/2.webp";
import veg3 from "../assets/Game1/vegetables/3.webp";
import veg4 from "../assets/Game1/vegetables/4.webp";
import veg5 from "../assets/Game1/vegetables/5.webp";
import veg6 from "../assets/Game1/vegetables/6.webp";
import veg7 from "../assets/Game1/vegetables/7.webp";
import veg8 from "../assets/Game1/vegetables/8.webp";
import veg9 from "../assets/Game1/vegetables/9.webp";
import veg10 from "../assets/Game1/vegetables/10.webp";
import veg11 from "../assets/Game1/vegetables/11.webp";
import veg12 from "../assets/Game1/vegetables/12.webp";
import veg13 from "../assets/Game1/vegetables/13.webp";
import veg14 from "../assets/Game1/vegetables/14.webp";

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
