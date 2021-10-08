import { combineReducers, createStore } from "redux";
import dialogsRreducer from "./dialogs-reducer";
import profileRreducer from "./profile-reducer";
import sidebarRreducer from "./sidebar-reducer";

let reducers = combineReducers({
  profilePage: profileRreducer, 
  dialogsPage: dialogsRreducer,
  sidebar: sidebarRreducer
})

let store = createStore(reducers);


export default store;