import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { updateNewMessageBodyCreator, sendMessageCreator } from "../../redux/state";

const Dialogs = (props) => {
  let state = props.store.getState().messagesPage

  const dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} img={d.img} />
  ));

  const messagesElements = state.messages.map((m) => (
    <Message message={m.message} />
  ));

  const newMessageBody = state.newMessageBody

  const onNewMessageChange = (e) => {
    let body = e.target.value
    props.store.dispatch(updateNewMessageBodyCreator(body))
  }

  const onMessageClick = () => {

    props.store.dispatch(sendMessageCreator())
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}
      </div>
      <div className="messages">{messagesElements}
      </div>
      <div>
        <div>
          <textarea
            cols={45}
            rows={5}
            placeholder='Write new message'
            value={newMessageBody}
            onChange={onNewMessageChange}
          >
          </textarea>
        </div>
        <div> <button onClick={onMessageClick} >add message</button> </div>
      </div>
    </div>
  );
};

export default Dialogs;
