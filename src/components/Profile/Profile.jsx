import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import s from './Profile.module.css';

const Profile = (props) => {
    return (
    <div> 
      <ProfileInfo/>
      <MyPosts postsData = {props.state.postsData} 
               newPostText = {props.state.newPostText}
               updateNewPostText ={props.updateNewPostText} 
               toAddPost={props.toAddPost}/>
    </div>
  )
}

export default Profile;
