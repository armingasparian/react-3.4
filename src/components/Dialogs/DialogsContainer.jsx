import React from "react";
import "../Dialogs/Dialogs.css";
import Dialogs from "./Dialogs";
import DialogItem from "./DilalogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {updateNewMessageBodyActionCreator, sendMessageActionCreator} from '../../redux/dialogs-reducer';


function DialogsContainer(props) {

  let state = props.store.getState().dialogsPage;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageActionCreator());
  }
  let onNewMessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyActionCreator(body));
  }

  return(
    <Dialogs updateNewMessageBody={onNewMessageChange}
             sendMessage={onSendMessageClick} 
             dialogsPage={state}/>
  )
}

export default DialogsContainer;