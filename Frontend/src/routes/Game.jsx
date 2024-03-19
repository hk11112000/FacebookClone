import React from "react";
import gameStyle from "../componentsCss/Game.module.css";
import SideBarComponent from "../components/SideBarComponent";
import MenuComponent from "../components/MenuComponent";
import MainContent from "../components/MainContent";

function Game() {
  const gameMenu = ["Home", "Live", "Reels", "Shows", "Explore", "Saved"];
  return (
    <div className={`${gameStyle["mainContainer"]}`}>
      <SideBarComponent value="Marketplace" searchValue="Search marketplace">
        {gameMenu.map((menu, index) => {
          return <MenuComponent value={Object.values(menu)} />;
        })}
      </SideBarComponent>
      <MainContent />
    </div>
  );
}

export default Game;
