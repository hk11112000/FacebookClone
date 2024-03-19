import React from "react";
import loadingStyle from "../componentsCss/Loading.module.css";

function Loading() {
  return (
    <div className={`${loadingStyle["loadingContainer"]}`}>
      <div className={`${loadingStyle["lds-facebook"]}`}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loading;
