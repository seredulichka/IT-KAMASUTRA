import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElement = props.postsData.map( p => <Post message={p.message} likesCount={p.likesCount}/> );

  let newPostElement = React.createRef();
  
  let addPost = () => {
    props.toAddPost();
    props.updateNewPostText('');
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={s.postBlock}>
      <h3>
        My posts
      </h3>
      <div>
        <div>
          <textarea value = {props.newPostText} onChange={onPostChange} ref={newPostElement}/>
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
