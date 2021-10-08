const ADD_POST = 'ADD-POst';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
        posts: [
          { id: 1, message: "Hello, I am Tina!", likecount: 15 },
          { id: 2, message: "Hi, it's my first post", likecount: 23 }
        ],
        newPostText: "Hello, it's me!!!"
}

const profileRreducer = (state = initialState, action) => {
  switch(action.type) {
      case ADD_POST:
          let newPost = {
            id: 3,
            message: state.newPostText,
            likecount: 0
          };
          state.posts.push(newPost);
          state.newPostText = '';
          return state;
      case UPDATE_NEW_POST_TEXT:
          state.newPostText = action.newText;
          return state;
      default:
          return state; 
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text 
  }
}

export default profileRreducer;