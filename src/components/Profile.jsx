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
      <div>
        My Posts
        <div>New post</div>
        <div className={c.item}>post 1</div>
        <div className={c.item}>post 2</div>
      </div>
    </div>
  );
};

export default Profile;
