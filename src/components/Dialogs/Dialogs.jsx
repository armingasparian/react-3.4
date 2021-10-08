import React from "react";
import "../Dialogs/Dialogs.css";
import DialogItem from "./DilalogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {updateNewMessageBodyActionCreator, sendMessageActionCreator} from '../../redux/dialogs-reducer';


function Dialogs(props) {

  let state = props.dialogsPage;

  let dialogElements = state.dialogs.map(d =>  <DialogItem name={d.name} id={d.id} />)
  let messageElements = state.messages.map(m =>  <MessageItem message={m.message} />)
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  }
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
    // props.store.dispatch(updateNewMessageBodyActionCreator(body));
  }

  return(
    <div className="dialogs">
      <div className="dialog-items">
       { dialogElements }
      </div>     
      <div className="message-items">
        <div>{ messageElements }</div>
        <div>
          <div><textarea value={newMessageBody} 
                         onChange={onNewMessageChange}
                         placeholder='Enter your message'></textarea></div>
          <div><button onClick={onSendMessageClick}>Send</button></div>
        </div>
      
      </div>
    </div>
  )
}

export default Dialogs;