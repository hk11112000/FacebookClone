import React, { useEffect } from "react";
import headerStyle from "../componentsCss/Header.module.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaFacebookMessenger } from "react-icons/fa";
import { IoSearchSharp, IoNotifications } from "react-icons/io5";
import { GoHomeFill } from "react-icons/go";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { BsShop, BsPersonCircle } from "react-icons/bs";
import { IoLogoGameControllerA } from "react-icons/io";
import { CgMenuGridO } from "react-icons/cg";

function Header() {
  const scrolltoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className={`${headerStyle["headerContainer"]}`}>
      <div className={`${headerStyle["leftContainer"]}`}>
        <FaFacebook onClick={scrolltoTop} />
        <div className={`${headerStyle["searchBar"]}`}>
          <IoSearchSharp />
          <div type="text" placeholder="Search facebook">
            Search facebook
          </div>
        </div>
      </div>
      <div className={`${headerStyle["middleContainer"]}`}>
        <Link to="/home">
          <GoHomeFill />
          <div>Home</div>
        </Link>
        <Link to="/video">
          <MdOutlineOndemandVideo />
          <div>Video</div>
        </Link>
        <Link to="/marketplace">
          <BsShop />
          <div>MarketPlace</div>
        </Link>
        <Link to="/group">
          <BsPersonCircle />
          <div>Group</div>
        </Link>
        <Link to="/game">
          <IoLogoGameControllerA />
          <div>Game</div>
        </Link>
      </div>
      <div className={`${headerStyle["rightContainer"]}`}>
        <div className={`${headerStyle["rContainer"]}`}>
          <CgMenuGridO />
        </div>
        <div className={`${headerStyle["rContainer"]}`}>
          <FaFacebookMessenger />
        </div>
        <div className={`${headerStyle["rContainer"]}`}>
          <IoNotifications />
        </div>
        <div className={`${headerStyle["rContainerImg"]}`}>
          <img src="PP.jpg" alt="Profile" />
        </div>
      </div>
    </div>
  );
}

export default Header;
