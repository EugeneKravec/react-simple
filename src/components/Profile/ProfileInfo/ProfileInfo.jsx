import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <img className={s.img} src={props.info.src} alt={props.info.alt} />
      <div>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
