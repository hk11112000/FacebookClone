import React from "react";

import SiderBarLeft from "../components/SiderBarLeft";
import homeStyle from "../componentsCss/Home.module.css";
import MainContent from "../components/MainContent";
import SiderBarRight from "../components/SiderBarRight";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";

function Home() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <div className={`${homeStyle["homeContainer"]}`}>
      {fetchStatus.currentlyFetching ? null : (
        <>
          <SiderBarLeft />
          <MainContent />
          <SiderBarRight />
        </>
      )}
    </div>
  );
}

export default Home;
