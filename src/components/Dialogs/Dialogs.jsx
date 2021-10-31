import React from  'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/state';


const Dialogs = (props) => {     
    let dialogsElements = props.dialogsPage.dialogs.map( d => <DialogItem id={d.id} name={d.name} link={d.link}/>);
    let messagesElements = props.dialogsPage.messages.map( m => <Message message={m.message} />);

    let addMessage = () => {
        props.addMessage()
    }
    
    let onMessageChange = (event) => {
        let text = event.target.value;
        props.onMessageChange(text)
    }

    return(
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    { dialogsElements }
                </div>
                <div className={s.messages}>
                    { messagesElements }
                    <textarea value = {props.dialogsPage.newMessageText} onChange={onMessageChange}>
                    </textarea>
                    <button onClick={addMessage}>
                        Send
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;