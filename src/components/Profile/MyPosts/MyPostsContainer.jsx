import { connect } from 'react-redux';
import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state';
import MyPosts from './MyPosts';


let mapSteteToProps = (state) =>{
  return{
    profilePage: state.profilePage
  }
}
let mapDispatchToProps = (dispatch) =>{
  return{
      addPost: ()=>{
          dispatch(addPostActionCreator());
      },
      onPostChange: (text)=>{
        let action = updateNewPostTextActionCreator(text)
        dispatch(action);
      }
  }
}

const MyPostsContainer = connect(mapSteteToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;
