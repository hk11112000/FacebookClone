import React from "react";
import groupStyle from "../componentsCss/Group.module.css";
import SideBarComponent from "../components/SideBarComponent";
import MenuComponent from "../components/MenuComponent";
import MainContent from "../components/MainContent";

function Group() {
  const videoMenu = ["Home", "Live", "Reels", "Shows", "Explore", "Saved"];
  return (
    <div className={`${groupStyle["mainContainer"]}`}>
      <SideBarComponent value="Marketplace" searchValue="Search marketplace">
        {videoMenu.map((menu, index) => {
          return <MenuComponent value={Object.values(menu)} />;
        })}
      </SideBarComponent>
      <MainContent />
    </div>
  );
}

export default Group;
