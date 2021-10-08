import React from "react";
import "../Profile/Profile.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";
import MyPostsContainer from "../MyPosts/MyPostsContainer";


function Profile(props) {

  return(
    <div>
      <ProfileInfo/>
      <MyPostsContainer store={props.store} />
    </div>
  )
}

export default Profile;