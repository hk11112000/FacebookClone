import React, { useEffect } from "react";
import mainStyle from "../componentsCss/MainContent.module.css";
import Story from "./Story";
import CreatePostComponent from "./CreatePostComponent";
import ShowPost from "./ShowPost";
import { useDispatch, useSelector } from "react-redux";
import { postActions } from "../store/postSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

function MainContent() {
  let h = Math.floor(Math.random() * 24 + 1);
  let c = Math.floor(Math.random() * 100 + 1);
  let s = Math.floor(Math.random() * 100 + 1);
  const fetchStatus = useSelector((status) => status.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPosts = async () => {
      if (fetchStatus.fetchDone) return;
      const controller = new AbortController();
      const signal = controller.signal;
      dispatch(fetchStatusActions.markFetchingStarted());
      try {
        const response = await fetch("http://localhost:8080/post", { signal });

        if (!response.ok) {
          throw new Error(`Http error! Status: ${response.status}`);
        }
        const data = await response.json();
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchingDone());
        dispatch(postActions.fetchPost(data.post));
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, []);

  const post = useSelector((state) => state.fetchPost);

  return (
    <div className={`${mainStyle["mainContainer"]}`}>
      <Story />
      <CreatePostComponent />
      {post.map((posts) => {
        return <ShowPost key={posts.id} item={posts} h={h} s={s} c={c} />;
      })}
    </div>
  );
}

export default MainContent;
