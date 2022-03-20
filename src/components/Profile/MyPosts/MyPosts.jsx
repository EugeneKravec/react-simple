import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  const postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));
  let newPostElement = React.createRef();

  const addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = "";
  };

  const onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };
  return (
    <div className={s.posts}>
      My Posts
      <div>
        <textarea ref={newPostElement} onChange={onPostChange}></textarea>
        <button onClick={addPost}>Add post</button>
      </div>
      <div>New post</div>
      <div>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
