import React from "react";
import "../MyPosts/MyPosts.css";
import Post from "./Posts/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/profile-reducer";

function MyPosts(props) {

  let postElemets = props.posts.map(p => <Post message={p.message} likecount={p.likecount}/>)

  let newPostElement = React.createRef();


  let onAddPost = () => {
    props.addPost();
  }
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return(
    <div className="posts-block">
      <h3>My Posts</h3>
      <div>
        <div>
            <textarea onChange={onPostChange} ref={newPostElement} 
                      value={props.newPostText}/>
        </div>
        <div>
          <button onClick={onAddPost}>Add Post</button>
        </div>    
      </div>
      <div className="post">
        { postElemets }
      </div>
    </div>
  )
}

export default MyPosts;