import React from "react";
import sideBarRight from "../componentsCss/SiderBarRight.module.css";
import { FaFacebook } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { HiDotsHorizontal } from "react-icons/hi";
import { GoDotFill } from "react-icons/go";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { friendsActions } from "../store/friendsSlice";

function SiderBarRight() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchFriend = async () => {
      try {
        const response = await fetch("http://localhost:8080/friend");

        if (!response.ok) {
          throw new Error(`Http error! Status: ${response.status}`);
        }
        const data = await response.json();
        dispatch(friendsActions.fetchFriends(data.friend));
      } catch (error) {
        console.log(error);
      }
    };
    fetchFriend();
  }, []);

  const contact = useSelector((state) => state.fetchFriends);

  return (
    <div className={`${sideBarRight["mainContainer"]}`}>
      <div className={`${sideBarRight["birthdayContainer"]}`}>
        <h3>Birthdays</h3>
        <div className={`${sideBarRight["birthdayInfoContainer"]}`}>
          <FaFacebook />
          <span>Advait Amrutkar and 2 others have their birthdays today.</span>
        </div>
      </div>

      <div className={`${sideBarRight["sectionLine"]}`}></div>

      <div className={`${sideBarRight["contactContainer"]}`}>
        <div className={`${sideBarRight["contactHeadingContainer"]}`}>
          <span>Contacts</span>
          <div className={`${sideBarRight["menuContactContainer"]}`}>
            <IoSearch />
            <HiDotsHorizontal />
          </div>
        </div>
        {contact.map((friends) => {
          return (
            <div
              key={friends.id}
              className={`${sideBarRight["menuContainer"]}`}
            >
              <img src={friends.picture} alt="" />
              <h3>{friends.firstName + " " + friends.lastName}</h3>
              <div className={`${sideBarRight["greenDotContainer"]}`}>
                <GoDotFill />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SiderBarRight;
