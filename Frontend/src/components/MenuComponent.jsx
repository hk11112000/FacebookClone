import React from "react";
import menuStyle from "../componentsCss/MenuComponent.module.css";
import { GoPersonFill } from "react-icons/go";
function MenuComponent({ iconvalue, value }) {
  return (
    <div className={`${menuStyle["menuContainer"]}`}>
      <GoPersonFill />
      <h3>{value}</h3>
    </div>
  );
}

export default MenuComponent;
