import VolumeUp from "@mui/icons-material/VolumeUp";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeMute from "@mui/icons-material/VolumeOff";
import Slider from "@mui/material/Slider";
import { useContext } from "react";
import bgAudioUrl from "./assets/audio/bgAudio.mp3";
import clickAudioUrl from "./assets/audio/click.mp3";
import goToMenu from "./assets/goToMenu.webp";
import { Context } from "./Context";
import "./styles/App.css";
import "./styles/MainPage.css";

const bgAudio = new Audio(bgAudioUrl);
bgAudio.loop = true;
bgAudio.autoplay = true;
bgAudio.volume = 0.1;
bgAudio.preload = "auto";

const clickAudio = new Audio(clickAudioUrl);

function App() {
  const {
    currentPage,
    setCurrentPage,
    volume,
    prevVolume,
    currentPageIndex,
    setVolume,
  } = useContext(Context);

  bgAudio.volume = volume / 100;

  const handleChange = (event: Event, newValue: number | number[]) => {
    setVolume(newValue as number);
  };

  const onClickHandler = () => {
    clickAudio.play();
    bgAudio.play();
    setCurrentPage(1);
  };

  const renderVolumeBtn = () => {
    if (volume === 0) return <VolumeMute />;
    if (volume > 0 && volume <= 50) return <VolumeDown />;
    if (volume > 50) return <VolumeUp />;
  };

  const volumeBtnClick = () => {
    if (volume !== 0) {
      setVolume(0);
    } else {
      setVolume(prevVolume);
    }
  };

  const goToHomePage = () => {
    setCurrentPage(1);
  };

  return (
    <div className="mainPageContainer">
      <div className="mainHeader">
        {currentPageIndex === 0 && (
          <button className="starButton" role="button" onClick={onClickHandler}>
            Вперед!
          </button>
        )}
        {currentPageIndex > 1 && (
          <img src={goToMenu} className="goToMenuBtn" onClick={goToHomePage} />
        )}
        <div className="volumeContainer">
          <div className="volumeButton" onClick={volumeBtnClick}>
            {renderVolumeBtn()}
          </div>
          <Slider className="slider" value={volume} onChange={handleChange} />
        </div>
      </div>
      <div className="mainArea">{currentPage}</div>
    </div>
  );
}

export default App;
