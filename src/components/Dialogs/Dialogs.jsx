import React from  'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {     
    let dialogsElements = props.state.dialogs.map( d => <DialogItem id={d.id} name={d.name} link={d.link}/>);
    let messagesElements = props.state.messages.map( m => <Message message={m.message} />);

    let newDialogItem = React.createRef();

    let addMessage = () => {
        props.toAddMessage();
        props.updateNewMessageText('');
    }
    
    let onMessageChange = () => {
        let text = newDialogItem.current.value;
        props.updateNewMessageText(text);
    }

    return(
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    { dialogsElements }
                </div>
                <div className={s.messages}>
                    { messagesElements }
                    <textarea value = {props.newMessageText} onChange={onMessageChange} ref = {newDialogItem}>

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