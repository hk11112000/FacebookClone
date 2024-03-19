import React, { useEffect, useState } from "react";
import sideBarLeft from "../componentsCss/SiderBarLeft.module.css";
import { FaFacebook } from "react-icons/fa";
import { IoIosArrowDropup, IoIosArrowDropdown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { menuActions } from "../store/menuSlice";

function SiderBarLeft() {
  const disptach = useDispatch();

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch("http://localhost:8080/menu");
        if (!response.ok) {
          throw new Error(`Http error! Status: ${response.status}`);
        }
        const data = await response.json();
        disptach(menuActions.fetchMenu(data.menu));
      } catch (error) {}
    };
    fetchMenu();
  }, []);
  const fetchMenu = useSelector((state) => state.fetchMenu);

  const [arrowValue, setArrowValue] = useState(<IoIosArrowDropdown />);
  const [value, setValue] = useState("More");
  const [state, setState] = useState(false);
  const toggleShow = () => {
    setState(!state);
    if (!state) {
      setArrowValue(<IoIosArrowDropup />);
      setValue("Less");
    } else {
      setArrowValue(<IoIosArrowDropdown />);
      setValue("More");
    }
  };
  return (
    <div className={`${sideBarLeft["mainContainer"]}`}>
      <div className={`${sideBarLeft["menuContainer"]}`}>
        <img src="/PP.jpg" alt="" />
        <h3>Himanshu Karpe</h3>
      </div>
      {fetchMenu.map((menu) => {
        if (state === false) {
          if (menu.id <= 6) {
            return (
              <div key={menu.id} className={`${sideBarLeft["menuContainer"]}`}>
                <img src={menu.image} alt="" />
                <h3>{menu.menuName}</h3>
              </div>
            );
          }
        } else {
          return (
            <div key={menu.id} className={`${sideBarLeft["menuContainer"]}`}>
              <img src={menu.image} alt="" />
              <h3>{menu.menuName}</h3>
            </div>
          );
        }
      })}
      {fetchMenu.length === 0 ? null : (
        <div
          onClick={toggleShow}
          className={`${sideBarLeft["showMoreContainer"]}`}
        >
          {arrowValue} <h3>See {value}</h3>
        </div>
      )}
      <div className={`${sideBarLeft["sectionLine"]}`}></div>
      <div className={`${sideBarLeft["extraInfoContainer"]}`}>
        Privacy · Terms · Advertising · Ad choices · Cookies · More · Himanshu ©
        2024
      </div>
    </div>
  );
}

export default SiderBarLeft;
