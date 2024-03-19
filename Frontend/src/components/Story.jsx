import React, { useEffect, useRef } from "react";
import storyStyle from "../componentsCss/Story.module.css";
import { FaCirclePlus } from "react-icons/fa6";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { friendsActions } from "../store/friendsSlice";

function Story() {
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

  const ref = useRef(null);

  const scroll = (scrollOffSet) => {
    ref.current.scrollLeft += scrollOffSet;
  };
  return (
    <div className={`${storyStyle["importantContanier"]}`}>
      <div className={`${storyStyle["leftArrow"]}`}>
        <IoIosArrowDropleftCircle onClick={() => scroll(-500)} />
      </div>
      <div ref={ref} className={`${storyStyle["mainContainer"]}`}>
        <div className={`${storyStyle["showStory"]}`}>
          <div className={`${storyStyle["createStoryContainer"]}`}>
            <img src="/StoryImage.jpg" alt="" />
            <div className={`${storyStyle["infoContainer"]}`}>
              <FaCirclePlus />
              <span>Create Story</span>
            </div>
          </div>
          {contact.map((contact) => {
            return (
              <div
                key={contact.id}
                className={`${storyStyle["showStoryContainer"]}`}
              >
                <div className={`${storyStyle["showProfileContainer"]}`}>
                  <img src={contact.picture} alt="" />
                </div>
                <img src="/StoryImage.jpg" alt="" />
                <span>{contact.firstName + " " + contact.lastName}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className={`${storyStyle["rightArrow"]}`}>
        <IoIosArrowDroprightCircle onClick={() => scroll(500)} />
      </div>
    </div>
  );
}

export default Story;
