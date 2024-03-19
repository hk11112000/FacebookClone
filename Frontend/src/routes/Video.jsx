import React from "react";
import SideBarComponent from "../components/SideBarComponent";
import videoStyle from "../componentsCss/Video.module.css";
import MenuComponent from "../components/MenuComponent";
import MainContent from "../components/MainContent";

function Video() {
  const videoMenu = ["Home", "Live", "Reels", "Shows", "Explore", "Saved"];
  return (
    <div className={`${videoStyle["mainContainer"]}`}>
      <SideBarComponent value="Video" searchValue="Search videos">
        {videoMenu.map((menu, index) => {
          return <MenuComponent value={Object.values(menu)} />;
        })}
      </SideBarComponent>
      <MainContent />
    </div>
  );
}

export default Video;
