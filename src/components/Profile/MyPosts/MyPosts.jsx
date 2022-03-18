// import c from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  const postData = [
    { id: 1, message: "Hi, how are you?", likesCount: 34 },
    { id: 2, message: "It's my first post", likesCount: 23 },
  ];

  return (
    <div>
      My Posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div>New post</div>
      <div>
        <Post
          message={postData[0].message}
          likesCount={postData[0].likesCount}
        />
        <Post
          message={postData[1].message}
          likesCount={postData[1].likesCount}
        />
      </div>
    </div>
  );
};

export default MyPosts;
