import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElement = props.postsData.map( p => <Post message={p.message} likesCount={p.likesCount}/> );
  
  let addPost = () => {
    //props.toAddPost();
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = (e) => {
    //let text = newPostElement.current.value;
    let text = e.target.value;
    //props.updateNewPostText(text);
    //props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
    props.dispatch(updateNewPostTextActionCreator(text));
  }

  return (
    <div className={s.postBlock}>
      <h3>
        My posts
      </h3>
      <div>
        <div>
          <textarea value = {props.newPostText} onChange={onPostChange}/>
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
