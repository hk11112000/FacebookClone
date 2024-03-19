import React, { useState } from "react";
import postStyle from "../componentsCss/ShowPost.module.css";
import { BsThreeDots } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { PiShareFatLight } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { likeActions } from "../store/likeSlice";

function ShowPost({ item, h, c, s }) {
  const dispatch = useDispatch();
  const likeValue = useSelector((state) => state.likeFriends);
  const postFound = likeValue.indexOf(item.id) >= 0;

  const handleLike = () => {
    dispatch(likeActions.likeFriends(item.id));
  };
  const handleUnLike = () => {
    dispatch(likeActions.unLikeFriends(item.id));
  };
  return (
    <div className={`${postStyle["mainContainer"]}`}>
      <div className={`${postStyle["header"]}`}>
        <div className={`${postStyle["left"]}`}>
          <img src={item.owner.picture} alt="" />
          <div className={`${postStyle["infoContainer"]}`}>
            <div>{item.owner.firstName + " " + item.owner.lastName}</div> &nbsp;
            &nbsp;
            <a href="#">
              <span>Follow</span>
            </a>
            <span>{h}h</span>
          </div>
        </div>
        <div className={`${postStyle["right"]}`}>
          <BsThreeDots />
          <RxCross2 />
        </div>
      </div>
      <div className={`${postStyle["description"]}`}>
        Hello guys, 😊{item.text}
      </div>
      <div className={`${postStyle["photo"]}`}>
        <img src={item.image} alt="" />
      </div>
      <div className={`${postStyle["like"]}`}>
        <div className={`${postStyle["leftLike"]}`}>
          <img src="/Like.svg" alt="" />
          <span>{item.likes}K</span>
        </div>
        <div className={`${postStyle["rightLike"]}`}>
          <span>{c} comments</span>
          <span>{s} shares</span>
        </div>
      </div>
      <div className={`${postStyle["sectionLine"]}`}></div>
      <div className={`${postStyle["secondContainer"]}`}>
        {postFound ? (
          <div
            onClick={handleUnLike}
            className={`${postStyle["innerDivActive"]}`}
          >
            <AiFillLike />
            <span>Like</span>
          </div>
        ) : (
          <>
            <div onClick={handleLike} className={`${postStyle["innerDiv"]}`}>
              <AiOutlineLike />
              <span>Like</span>
            </div>
          </>
        )}
        <div className={`${postStyle["innerDiv1"]}`}>
          <FaRegComment /> <span>Comment</span>
        </div>
        <div className={`${postStyle["innerDiv2"]}`}>
          <PiShareFatLight /> <span>Share</span>
        </div>
      </div>
    </div>
  );
}

export default ShowPost;
