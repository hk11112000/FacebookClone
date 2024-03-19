import React from "react";
import cpStyle from "../componentsCss/CreatePostComponent.module.css";
import { PiVideoCameraFill } from "react-icons/pi";
import { IoMdPhotos } from "react-icons/io";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { ImVideoCamera } from "react-icons/im";

function CreatePostComponent() {
  return (
    <div className={`${cpStyle["mainContainer"]}`}>
      <div className={`${cpStyle["firstContainer"]}`}>
        <img src="/PP.jpg" alt="" />
        <input type="text" placeholder="What's on your mind, Himanshu?" />
      </div>
      <div className={`${cpStyle["sectionLine"]}`}></div>
      <div className={`${cpStyle["secondContainer"]}`}>
        <div className={`${cpStyle["innerDiv"]}`}>
          <PiVideoCameraFill />
          <span>Live video</span>
        </div>
        <div className={`${cpStyle["innerDiv1"]}`}>
          <IoMdPhotos /> <span>Photo/Video</span>
        </div>
        <div className={`${cpStyle["innerDiv2"]}`}>
          <MdOutlineEmojiEmotions /> <span>Feeling/Activity</span>
        </div>
      </div>
    </div>
  );
}

export default CreatePostComponent;
