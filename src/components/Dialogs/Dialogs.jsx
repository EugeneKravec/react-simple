import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

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

const Message = (props) => {
  return <div className={s.dialog}>{props.message}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Dimych" id="1" />
        <DialogItem name="Andrey" id="2" />
        <DialogItem name="Sveta" id="3" />
        <DialogItem name="Sasha" id="4" />
        <DialogItem name="Viktor" id="5" />
      </div>
      <div className="messages">
        <Message message="Hi" />
        <Message message="How are your education?" />
        <Message message="Yo-yo" />
        <Message message="Yo-yo" />
      </div>
    </div>
  );
};

export default Dialogs;
