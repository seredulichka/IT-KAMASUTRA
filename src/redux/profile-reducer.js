const ADD_POST = 'ADD-POST',
      UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData:[{id: 1, message: 'Hi, how are you?', likesCount: 12}, 
          {id: 2, message: "It's my first post", likesCount: 20}, 
          {id: 3, message: "It's important to know this well", likesCount: 9}, 
          {id: 4, message: 'It is a Haizenberg', likesCount: 18}
    ],
    newPostText:''
}

const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST: 
            let newPost = {
                id:5,
                message: state.newPostText,
                likesCount: 0
            };
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state 
    }
}

export default profileReducer;