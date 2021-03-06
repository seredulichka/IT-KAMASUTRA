import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sitebarReducer from "./sitebar-reducer";

const ADD_POST = 'ADD-POST',
      UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT',
      ADD_MESSAGE = 'ADD-MESSAGE',
      UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: { 
        profilePage:{
            posts:[{id: 1, message: 'Hi, how are you?', likesCount: 12}, 
                  {id: 2, message: "It's my first post", likesCount: 20}, 
                  {id: 3, message: "It's important to know this well", likesCount: 9}, 
                  {id: 4, message: 'It is a Haizenberg', likesCount: 18}
            ],
            newPostText:''
        },
        dialogsPage: {
            dialogs:[{id: 1, name: 'Jesse Pinkman', link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Aaron_Paul_by_Gage_Skidmore_3.jpg/220px-Aaron_Paul_by_Gage_Skidmore_3.jpg'}, 
                 {id: 2, name: 'Skyler White', link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Anna_Gunn_by_Gage_Skidmore_3.jpg/220px-Anna_Gunn_by_Gage_Skidmore_3.jpg'}, 
                 {id: 3, name: 'Hank Schrader', link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Dean_Norris_by_Gage_Skidmore_3.jpg/220px-Dean_Norris_by_Gage_Skidmore_3.jpg'}, 
                 {id: 4, name: 'Marie Schrader', link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Betsy_Brandt_by_Gage_Skidmore.jpg/220px-Betsy_Brandt_by_Gage_Skidmore.jpg'}, 
                 {id: 5, name: 'Walter White Jr.', link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/RJ_Mitte_April_2015.jpg/220px-RJ_Mitte_April_2015.jpg'}, 
                 {id: 6, name: 'Walter White', link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Bryan_Cranston_%2814471566797%29_%28cropped%29.jpg/220px-Bryan_Cranston_%2814471566797%29_%28cropped%29.jpg'} 
            ],
            messages:[{id: 1, message: 'Hi'}, 
                  {id: 2, message: 'How are you?'}, 
                  {id: 3, message: 'I want to meet with you'}, 
                  {id: 4, message: 'Yo'}, 
                  {id: 5, message: 'Yo'} 
            ],
            newMessageText:''
        },
        sitebar: {
            friends:[
                {id: 2, name: 'Skyler White', link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Anna_Gunn_by_Gage_Skidmore_3.jpg/220px-Anna_Gunn_by_Gage_Skidmore_3.jpg'}, 
                {id: 4, name: 'Marie Schrader', link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Betsy_Brandt_by_Gage_Skidmore.jpg/220px-Betsy_Brandt_by_Gage_Skidmore.jpg'},
                {id: 6, name: 'Walter White', link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Bryan_Cranston_%2814471566797%29_%28cropped%29.jpg/220px-Bryan_Cranston_%2814471566797%29_%28cropped%29.jpg'} 
            ]
        }    
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState(){
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sitebar = sitebarReducer(this._state.sitebar, action);
        
        this._callSubscriber();
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
  
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
  
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default store;
window.store = store;