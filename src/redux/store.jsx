// const ADD_POST = 'ADD-POst';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

// const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
// const SEND_MESSAGE = 'SEND-MESSAGE';

import profileRreducer from './profile-reducer';
import dialogsRreducer from './dialogs-reducer';
import sidebarRreducer from './sidebar-reducer';


let store = {
    _state: {
      profilePage: {
          posts: [
            { id: 1, message: "Hello, I am Tina!", likecount: 15 },
            { id: 2, message: "Hi, it's my first post", likecount: 23 }
          ],
          newPostText: "Hello, it's me!!!"
      },
      dialogsPage: {
          messages: [
            { message: "Hi" },
            { message: "How is your React?" },
            { message: "Hello" },
            { message: "It's my birthday" },
            { message: "I have finished the school" },
            { message: "Congratulations" }
          ],
          dialogs: [
            { id: 1, name: "Dimich" },
            { id: 2, name: "Andrey" },
            { id: 3, name: "Sveta" },
            { id: 4, name: "Sasha" },
            { id: 5, name: "Victor" },
            { id: 6, name: "Valera" }
          ],
          newMessageBody: ""
      } 
    },
    _callSubscriber() {
      console.log('State was changed!');
    },

    getState() {
      return this._state;
    },
    subscribe(observer) {
      this._callSubscriber = observer;
    },

    // addPost() {
    //   let newPost = {
    //     id: 3,
    //     message: this._state.profilePage.newPostText,
    //     likecount: 0
    //   };
    //   this._state.profilePage.posts.push(newPost);
    //   this._state.profilePage.newPostText = '';
    //   this._callSubscriber(this._state);
    // },
    // updateNewPostText(newText) {
    //   this._state.profilePage.newPostText = newText;
    //   this._callSubscriber(this._state);
    // },  

    dispatch(action) {

      // if(action.type === ADD_POST) {
      //       let newPost = {
      //         id: 3,
      //         message: this._state.profilePage.newPostText,
      //         likecount: 0
      //       };
      //       this._state.profilePage.posts.push(newPost);
      //       this._state.profilePage.newPostText = '';
      //       this._callSubscriber(this._state);
      // } else if(action.type === UPDATE_NEW_POST_TEXT) {
      //       this._state.profilePage.newPostText = action.newText;
      //       this._callSubscriber(this._state);
      // } else if(action.type === UPDATE_NEW_MESSAGE_BODY) {
      //       this._state.dialogsPage.newMessageBody = action.body;
      //       this._callSubscriber(this._state);
      // } else if(action.type === SEND_MESSAGE) {
      //       let body = this._state.dialogsPage.newMessageBody;
      //       this._state.dialogsPage.newMessageBody = '';
      //       this._state.dialogsPage.messages.push( { id: 7, message: body });           
      //       this._callSubscriber(this._state);
      // }

      this._state.profilePage = profileRreducer(this._state.profilePage, action);
      this._state.dialogsPage = dialogsRreducer(this._state.dialogsPage, action);
      this._state.sidebar = sidebarRreducer(this._state.sidebar, action);

      this._callSubscriber(this._state);
  }
}

export default store;
window.state = store;