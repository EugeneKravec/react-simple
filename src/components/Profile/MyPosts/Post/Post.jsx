import c from "./Post.module.css";

const Post = (props) => {
  return (
    <div>
      <div className={c.item}>
        <img
          src="https://prostomac.com/wp-content/uploads/2021/11/Apple-car-Vanarama-0.jpg"
          alt=""
        />
        {props.message}
        <div>
          <span>Like</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
