import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  const dialogs = [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Viktor" },
    { id: 6, name: "Dimych" },
    { id: 7, name: "Andrey" },
    { id: 8, name: "Sveta" },
    { id: 9, name: "Sasha" },
    { id: 10, name: "Viktor" },
  ];

  const messages = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are your education?" },
    { id: 3, message: "Yo-yo" },
    { id: 4, message: "Yo-yo" },
    { id: 5, message: "Yo-yo" },
    { id: 3, message: "Yo-yo" },
    { id: 4, message: "Yo-yo" },
    { id: 5, message: "Yo-yo" },
    { id: 3, message: "Yo-yo" },
    { id: 4, message: "Yo-yo" },
  ];

  const dialogsElements = dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  const messagesElements = messages.map((m) => <Message message={m.message} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className="messages">{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
