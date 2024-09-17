import { useCallback, useContext, useMemo, useState } from "react";
import "./Game1.css";
import fruitsBasket from "../assets/Game1/fruits.webp";
import vegetablesBasket from "../assets/Game1/vegetables.webp";
import nextBtn from "../assets/next.webp";
import okPapug from "../assets/okPapug.webp";
import neOkPapug from "../assets/neOkPapug.webp";
import { ElemType, getElements, TElemType } from "./const";
import { Grid, GridItem } from "../Grid/Grid";
import { Context } from "../Context";
import { Status } from "../types";

export const Game1 = () => {
  const { status, setStatus, onClickAudio } = useContext(Context);

  const [stage, setStage] = useState<number>(0);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [correctItems, setCorrectItems] = useState<number[]>([]);

  const isFirstStage = stage === 0 || stage === 1;

  const basketImg = isFirstStage ? vegetablesBasket : fruitsBasket;

  const elements: TElemType[] = useMemo(() => getElements(stage), [stage]);

  const nextStageHandler = () => {
    onClickAudio();
    setStage((prev) => prev + 1);
    setSelectedItems([]);
    setCorrectItems([]);
    setStatus(Status.whait);
  };

  const renderElements = useCallback(() => {
    const positions = [
      { colStart: 1, colEnd: 4, rowStart: 1, rowEnd: 4 },
      { colStart: 4, colEnd: 7, rowStart: 4, rowEnd: 7 },
      { colStart: 5, colEnd: 8, rowStart: 1, rowEnd: 4 },
      { colStart: 7, colEnd: 10, rowStart: 5, rowEnd: 8 },
      { colStart: 1, colEnd: 4, rowStart: 5, rowEnd: 8 },
    ];

    const itemClickHandler = (type: ElemType, index: number) => {
      onClickAudio();
      setSelectedItems((prev) => [...prev, index]);
      if (isFirstStage && type === ElemType.veg) {
        setStatus(Status.correct);
        setCorrectItems((prev) => [...prev, index]);
        return;
      }
      if (!isFirstStage && type === ElemType.fruit) {
        setStatus(Status.correct);
        setCorrectItems((prev) => [...prev, index]);
        return;
      }
      setStatus(Status.wrong);
    };

    return (
      <>
        {elements.map(({ src, type }, index) => (
          <GridItem key={index} position={positions[index]}>
            <img
              className={selectedItems.includes(index) ? "checkedElement" : ""}
              src={src}
              onClick={() => itemClickHandler(type, index)}
            />
          </GridItem>
        ))}
      </>
    );
  }, [selectedItems, elements, isFirstStage]);

  const basketPositions = [
    { colStart: 4, colEnd: 5, rowStart: 9, rowEnd: 11 },
    { colStart: 5, colEnd: 6, rowStart: 9, rowEnd: 11 },
    { colStart: 6, colEnd: 7, rowStart: 9, rowEnd: 11 },
  ];

  return (
    <div className="game1Container">
      <Grid>
        <>
          <GridItem
            position={{ colStart: 3, colEnd: 8, rowStart: 7, rowEnd: 13 }}
          >
            <img src={basketImg} />
          </GridItem>
          <GridItem
            position={{ colStart: 10, colEnd: 13, rowStart: 6, rowEnd: 13 }}
          >
            {status === Status.correct && (
              <img className="papugStatus" src={okPapug} />
            )}
            {status === Status.wrong && (
              <img className="papugStatus" src={neOkPapug} />
            )}
          </GridItem>
          {stage < 3 && (
            <GridItem
              position={{ colStart: 10, colEnd: 13, rowStart: 3, rowEnd: 6 }}
            >
              <img src={nextBtn} onClick={nextStageHandler} />
            </GridItem>
          )}
          {renderElements()}
          {correctItems.map((itemIndex, index) => {
            const { src } = elements[itemIndex];
            return (
              <GridItem position={basketPositions[index]}>
                <img src={src} />
              </GridItem>
            );
          })}
        </>
      </Grid>
    </div>
  );
};
