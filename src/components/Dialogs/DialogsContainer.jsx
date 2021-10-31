import { connect } from 'react-redux';
import React from  'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';


let mapSteteToProps = (state) =>{
    return{
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        addMessage: ()=>{
            dispatch(addMessageActionCreator());
            dispatch(updateNewMessageTextActionCreator(''));
        },
        onMessageChange: (text)=>{
            dispatch(updateNewMessageTextActionCreator(text));
        }

    }
}

const DialogsContainer = connect(mapSteteToProps, mapDispatchToProps)(Dialogs)
 

export default DialogsContainer;