import React from "react";
import shopStyle from "../componentsCss/Shop.module.css";
import SideBarComponent from "../components/SideBarComponent";
import MenuComponent from "../components/MenuComponent";
import MainContent from "../components/MainContent";

function Shop() {
  const shopMenu = ["Home", "Live", "Reels", "Shows", "Explore", "Saved"];
  return (
    <div className={`${shopStyle["mainContainer"]}`}>
      <SideBarComponent value="Marketplace" searchValue="Search marketplace">
        {shopMenu.map((menu, index) => {
          return <MenuComponent value={Object.values(menu)} />;
        })}
      </SideBarComponent>
      <MainContent />
    </div>
  );
}

export default Shop;
