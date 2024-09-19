import React, { useContext, useState } from "react";
import "./Game3.css";
import { Grid, GridItem } from "../Grid/Grid";
import { PapugStatus } from "../PapugStatus/PapugStatus";
import { Context } from "../Context";
import { photos } from "./const";
import { NextButton } from "../NextButton/NextButton";
import { Status } from "../types";

export const Game3 = () => {
  const { setStatus, onClickAudio } = useContext(Context);

  const [stage, setStage] = useState<number>(0);
  const [clickedItems, setClickedItems] = useState<number[]>([]);

  const nextStageHandler = () => {
    onClickAudio();
    setStage((prev) => prev + 1);
    setStatus(Status.whait);
    setClickedItems([]);
  };

  const positions = [
    [
      { colStart: 1, colEnd: 3, rowStart: 2, rowEnd: 6 },
      { colStart: 3, colEnd: 5, rowStart: 2, rowEnd: 6 },
    ],
    [
      { colStart: 6, colEnd: 8, rowStart: 2, rowEnd: 6 },
      { colStart: 8, colEnd: 10, rowStart: 2, rowEnd: 6 },
    ],
    [
      { colStart: 1, colEnd: 3, rowStart: 7, rowEnd: 11 },
      { colStart: 3, colEnd: 5, rowStart: 7, rowEnd: 11 },
    ],
    [
      { colStart: 6, colEnd: 8, rowStart: 7, rowEnd: 11 },
      { colStart: 8, colEnd: 10, rowStart: 7, rowEnd: 11 },
    ],
  ];

  return (
    <div className="game1Container">
      <Grid>
        {photos[stage]?.map(({ src1, src2 }, i) => (
          <>
            <GridItem key={src1} position={positions[i][0]}>
              <img className={"imgBorder"} src={src1} />
            </GridItem>
            <GridItem key={src2} position={positions[i][1]}>
              {!clickedItems.includes(i) ? (
                <img
                  className={"imgBorder scale hidden"}
                  onClick={() => setClickedItems((prev) => [...prev, i])}
                />
              ) : (
                <img className={"imgBorder scale"} src={src2} />
              )}
            </GridItem>
          </>
        ))}
        {!!photos[stage + 1] && (
          <NextButton nextStageHandler={nextStageHandler} />
        )}
        <PapugStatus />
      </Grid>
    </div>
  );
};
