import MyPosts from "./MyPosts/MyPosts";
import c from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={c.content}>
      <ProfileInfo />
      <MyPosts posts={props.posts} />
    </div>
  );
};

export default Profile;
