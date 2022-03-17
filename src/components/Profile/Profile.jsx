import MyPosts from "./MyPosts/MyPosts";
import c from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={c.content}>
      <div>
        <img
          src="https://as2.ftcdn.net/v2/jpg/01/82/53/33/1000_F_182533318_xGVfH4rnm5TrikGUX9zNptWy1Dlw06Vo.jpg"
          alt="main img"
        />
      </div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
