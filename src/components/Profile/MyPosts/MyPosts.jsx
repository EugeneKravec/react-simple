import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  const postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));
  let newPostElement = React.createRef();

  const addPost = () => {
    props.dispatch({ type: 'ADD-POST' })
    // props.addPost();
  };

  const onPostChange = () => {
    let text = newPostElement.current.value;
    // props.updateNewPostText(text);
    props.dispatch({
      type: 'UPDATE-NEW-POST-TEXT', newText: text
    })

  };
  return (
    <div className={s.posts}>
      My Posts
      <div>
        <textarea value={props.newPostText} ref={newPostElement} onChange={onPostChange}></textarea>
        <button onClick={addPost}>Add post</button>
      </div>
      <div>New post</div>
      <div>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
