const ADD_MESSAGE = 'ADD-MESSAGE',
      UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


const dialogsReducer = (state, action) => {
    switch(action.type){
       case ADD_MESSAGE: let body = state.newMessageText;
        state.newMessageText = '';
        state.messages.push({id:6, message: body});
        return state;
       case UPDATE_NEW_MESSAGE_TEXT:
        state.newMessageText = action.newText;
        return state;
    }
}

export default dialogsReducer;