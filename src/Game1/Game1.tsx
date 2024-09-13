import { useCallback, useMemo, useState } from "react";
import "./Game1.css";
import fruitsBasket from "../assets/Game1/fruits.webp";
import vegetablesBasket from "../assets/Game1/vegetables.webp";
import nextBtn from "../assets/next.webp";
import okPapug from "../assets/okPapug.webp";
import { getElements, TElemType } from "./const";
import { Grid, GridItem } from "../Grid/Grid";

export const Game1 = () => {
  const [stage, setStage] = useState<number>(0);

  const isFirstStage = stage === 0 || stage === 1;

  const basketImg = isFirstStage ? vegetablesBasket : fruitsBasket;

  const elements: TElemType[] = useMemo(() => getElements(stage), [stage]);

  const renderElements = useCallback(() => {
    const positions = [
      { colStart: 1, colEnd: 3, rowStart: 1, rowEnd: 3 },
      { colStart: 3, colEnd: 5, rowStart: 2, rowEnd: 4 },
      { colStart: 5, colEnd: 7, rowStart: 1, rowEnd: 3 },
      { colStart: 7, colEnd: 9, rowStart: 2, rowEnd: 4 },
      { colStart: 1, colEnd: 3, rowStart: 4, rowEnd: 6 },
      { colStart: 3, colEnd: 5, rowStart: 5, rowEnd: 7 },
      { colStart: 5, colEnd: 7, rowStart: 4, rowEnd: 6 },
      { colStart: 7, colEnd: 9, rowStart: 5, rowEnd: 7 },
      { colStart: 1, colEnd: 3, rowStart: 7, rowEnd: 9 },
    ];

    return (
      <>
        {elements.map((elem, index) => (
          <GridItem key={index} position={positions[index]}>
            <img src={elem.src} />
          </GridItem>
        ))}
      </>
    );
  }, [elements]);

  return (
    <div className="game1Container">
      <Grid>
        <>
          <GridItem
            position={{ colStart: 3, colEnd: 7, rowStart: 8, rowEnd: 13 }}
          >
            <img src={basketImg} />
          </GridItem>
          <GridItem
            position={{ colStart: 10, colEnd: 13, rowStart: 6, rowEnd: 13 }}
          >
            <img src={okPapug} />
          </GridItem>
          {stage < 3 && (
            <GridItem
              position={{ colStart: 10, colEnd: 13, rowStart: 3, rowEnd: 6 }}
            >
              <img src={nextBtn} onClick={() => setStage((prev) => prev + 1)} />
            </GridItem>
          )}
          {renderElements()}
        </>
      </Grid>
    </div>
  );
};
