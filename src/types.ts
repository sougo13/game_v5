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
  onClickAudio: () => void;
  onWrongAudio: () => void;
  onCorrectAudio: () => void;
};
