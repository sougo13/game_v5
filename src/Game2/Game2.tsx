import { useContext, useState } from "react";
import nextBtn from "../assets/next.webp";
import { Context } from "../Context";
import { Grid, GridItem } from "../Grid/Grid";
import { Status } from "../types";
import { photos } from "./const";
import "./Game2.css";
import { PapugStatus } from "../PapugStatus/PapugStatus";

export const Game2 = () => {
  const { setStatus, onClickAudio } = useContext(Context);

  const [stage, setStage] = useState<number>(0);
  const [checked, setChecked] = useState<boolean>(false);

  const positions = [
    { colStart: 2, colEnd: 5, rowStart: 2, rowEnd: 5 },
    { colStart: 6, colEnd: 9, rowStart: 2, rowEnd: 5 },
    { colStart: 2, colEnd: 5, rowStart: 6, rowEnd: 10 },
    { colStart: 6, colEnd: 9, rowStart: 6, rowEnd: 10 },
  ];

  const nextStageHandler = () => {
    setChecked(false);
    onClickAudio();
    setStage((prev) => prev + 1);
    setStatus(Status.whait);
  };

  const itemClickHandler = (isCorrect: boolean) => {
    onClickAudio();
    if (isCorrect) {
      setStatus(Status.correct);
      setChecked(true);
    }
    if (!isCorrect) {
      setStatus(Status.wrong);
    }
  };

  return (
    <div className="game2Container">
      <Grid>
        {photos[stage]?.map(({ src, isCorrect }, i) => (
          <GridItem key={src} position={positions[i]}>
            <img
              className={
                checked && isCorrect
                  ? "imgBorder scale checkedElement"
                  : "imgBorder scale"
              }
              src={src}
              onClick={() => itemClickHandler(isCorrect)}
            />
          </GridItem>
        ))}
        {!!photos[stage + 1] && (
          <GridItem
            position={{ colStart: 10, colEnd: 13, rowStart: 3, rowEnd: 6 }}
          >
            <img src={nextBtn} onClick={nextStageHandler} />
          </GridItem>
        )}
        <PapugStatus />
      </Grid>
    </div>
  );
};
