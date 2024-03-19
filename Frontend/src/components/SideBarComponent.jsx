import React from "react";
import sideBarStyle from "../componentsCss/SideBarComponent.module.css";
import { IoIosSettings } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";

function SideBarComponent({ value, searchValue, children }) {
  return (
    <div className={`${sideBarStyle["mainContainer"]}`}>
      <div className={`${sideBarStyle["headerContainer"]}`}>
        <h3>{value}</h3>
        <IoIosSettings />
      </div>
      <div className={`${sideBarStyle["searchBar"]}`}>
        <IoSearchSharp />
        <div type="text">{searchValue}</div>
      </div>
      {children}
    </div>
  );
}

export default SideBarComponent;
