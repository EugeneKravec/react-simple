// import c from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  const posts = [
    { id: 1, message: "Hi, how are you?", likesCount: 34 },
    { id: 2, message: "It's my first post", likesCount: 23 },
    { id: 2, message: "Blalal", likesCount: 67 },
    { id: 2, message: "Yo=yoyoyoy", likesCount: 1245 },
  ];

  const postsElements = posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  return (
    <div>
      My Posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div>New post</div>
      <div>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
