import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElement = props.profilePage.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/> );
  
  let addPost = () => {
    props.addPost();
  }

  let onPostChange = (e) => {
    let text = e.target.value;
    props.onPostChange(text);
  }

  return (
    <div className={s.postBlock}>
      <h3>
        My posts
      </h3>
      <div>
        <div>
          <textarea value = {props.profilePage.newPostText} onChange={onPostChange}/>
        </div>
        <div>
          <button onClick={addPost}> 
            Add post 
          </button>
        </div>
      </div>
      <div className={s.posts}>
        { postsElement }
      </div>
    </div>
  )
}

export default MyPosts;
