import { createContext, FC, useRef, useState } from "react";
import { StartPage } from "./StartPage/StartPage";
import { Menu } from "./Menu/Menu";
import { Game1 } from "./Game1/Game1";
import { Game2 } from "./Game2/Game2";
import { Game3 } from "./Game3/Game3";
import { Game4 } from "./Game4/Game4";
import { Game5 } from "./Game5/Game5";

export enum Status {
  whait,
  correct,
  wrong,
}

export type TContext = {
  currentPage: JSX.Element;
  currentPageIndex: number;
  setCurrentPage: (newPage: number) => void;
  volume: number;
  prevVolume: number;
  setVolume: (newPage: number) => void;
  status: Status;
  setStatus: (newStatus: Status) => void;
};

export const Context = createContext<TContext>({
  currentPage: <StartPage />,
  currentPageIndex: 0,
  setCurrentPage: () => {},
  volume: 0,
  prevVolume: 0,
  setVolume: () => {},
  status: Status.whait,
  setStatus: () => {},
});

const time = 3000;

export const ContextProvider: FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [volume, setVolume] = useState<number>(30);
  const [prevVolume, setPrevVolume] = useState<number>(0);
  const [status, setStatus] = useState<Status>(Status.whait);
  const timer = useRef<number | null>(null);

  const setVolumeHandler = (newVolume: number) => {
    setPrevVolume(volume);
    setVolume(newVolume);
  };

  const setStatusHandler = (newStatus: Status) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    setStatus(newStatus);
    timer.current = setTimeout(() => {
      setStatus(Status.whait);
    }, time);
  };

  const pages: JSX.Element[] = [
    <StartPage />,
    <Menu />,
    <Game1 />,
    <Game2 />,
    <Game3 />,
    <Game4 />,
    <Game5 />,
  ];

  return (
    <Context.Provider
      value={{
        currentPage: pages[currentPage],
        currentPageIndex: currentPage,
        setCurrentPage,
        volume,
        prevVolume,
        setVolume: setVolumeHandler,
        status,
        setStatus: setStatusHandler,
      }}
    >
      {children}
    </Context.Provider>
  );
};
