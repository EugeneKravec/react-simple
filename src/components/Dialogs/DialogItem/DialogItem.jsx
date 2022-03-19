import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";

const DialogItem = (props) => {
  const path = "/dialogs/" + props.id;
  const active = (navData) => (navData.isActive ? s.active : s.item);

  return (
    <div className={s.item}>
      <NavLink to={path} className={active}>
        {<img src={props.img} alt="logo" /> + props.name + props.id}
      </NavLink>
    </div>
  );
};

export default DialogItem;
