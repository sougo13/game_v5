import papug from "../assets/papug.webp";
import "../styles/MainPage.css";

export const StartPage = () => {
  return (
    <div className="papugContainer">
      <p className="speech">
        <div>
          Привет!
          <br />
          Меня зовут попугайчик-Говоруша.
          <br />
          Мы попали на волшебный остров.
          <br />
          Помоги мне выполнить задания, чтобы отыскать клад!
        </div>
      </p>
      <img src={papug} className="papug" />
    </div>
  );
};
