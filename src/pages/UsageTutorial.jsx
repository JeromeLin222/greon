import player from "../assets/images/Player/Player.svg";

import "./UsageTutorial.css";

function UsageTutorial() {
  return (
    <>
      <div className="relative w-screen h-screen overflow-hidden">
        <img src={player} alt="player" className="fullscreen-img" />
      </div>
    </>
  );
}

export default UsageTutorial;
