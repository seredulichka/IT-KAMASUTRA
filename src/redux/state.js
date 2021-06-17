
let state = {
    profilePage:{
        postsData:[{id: 1, message: 'Hi, how are you?', likesCount: 12}, 
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
}

export let toAddPost = ()=>{
    let newPost = {
        id:5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    renderedEntireTree();
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderedEntireTree();
}

export let toAddMessage = ()=>{
    let newMessage = {
        id:5,
        message: state.dialogsPage.newMessageText
    };

    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    renderedEntireTree();
}

export let updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    renderedEntireTree();
}

let renderedEntireTree;
export const subscribe = (observer) => {
    renderedEntireTree = observer;
}

export default state;