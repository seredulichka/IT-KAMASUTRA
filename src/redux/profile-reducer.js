const ADD_POST = 'ADD-POST',
      UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts:[{id: 1, message: 'Hi, how are you?', likesCount: 12}, 
          {id: 2, message: "It's my first post", likesCount: 20}, 
          {id: 3, message: "It's important to know this well", likesCount: 9}, 
          {id: 4, message: 'It is a Haizenberg', likesCount: 18}
    ],
    newPostText:''
}

const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {id:5, message: state.newPostText, likesCount: 0}],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT:{
            return {
                ...state,
                newPostText: action.newText
            };
        }
        default:
            return state 
    }
}

export default profileReducer;

export const addPostActionCreator = () => ({type: ADD_POST})
  
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})