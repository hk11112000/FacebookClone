import React from "react";
import btnStyle from "../componentsCss/Button.module.css";

function Button({
  btnValue,
  btnColor,
  btnType,
  btnOnClick,
  btnHeight,
  btnWidth,
}) {
  return (
    <button
      className={`${btnStyle["btnContainer"]}`}
      onClick={btnOnClick}
      type={btnType}
      style={{ background: btnColor, height: btnHeight, width: btnWidth }}
    >
      {btnValue}
    </button>
  );
}

export default Button;
