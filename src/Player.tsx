import React from "react";

type Props = {};

const Player = (props: Props) => {
  return (
    <div className="hexagon">
      <div className="topContainer">
        {/* <div className="random"> */}
        <img
          className="logoVitality"
          src={"./assets/data/logoVitalityWhite.svg"}
          alt=""
        />
        {/* <img className="flares" src={"./assets/static/flares.svg"} alt="" /> */}
        <img className="flares" src={"./assets/static/flares2.svg"} alt="" />

        <img className="lights" src={"./assets/static/lights.png"} alt="" />

        <img
          className="playerPicture"
          src={"./assets/data/player.webp"}
          alt=""
        />
      </div>
      {/* </div> */}

      <div className="divider"></div>

      <div className="bottomContainer">
        <img className="lines" src={"./assets/static/lines.svg"} alt="" />
      </div>
    </div>
  );
};

export default Player;
