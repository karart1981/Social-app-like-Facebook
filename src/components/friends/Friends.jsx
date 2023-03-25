import React from 'react';
import "./Friends.css";

const Friends = ({ user }) => {
  return (
	<div>
	  <li className="sidebar-friend">
		<img 
		  src={user.profilePicture} 
		  alt="" 
		  className="sidebar-friend-img"
		/>
		<span className="sidebar-friend-name">{user.name}</span>
	  </li>
	</div>
  )
}

export default Friends;
