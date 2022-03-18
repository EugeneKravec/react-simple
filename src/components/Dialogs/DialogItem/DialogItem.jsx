import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";

const DialogItem = (props) => {
  const path = "/dialogs/" + props.id;
  const active = (navData) => (navData.isActive ? s.active : s.item);

  return (
    <div className={s.item}>
      <NavLink to={path} className={active}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
