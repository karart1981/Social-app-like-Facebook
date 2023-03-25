import React from 'react';
import "./Online.css";

const Online = ({onlineuser}) => {
  return (
	<div className="online">
		<li className="rightbar-friend">
			<div className="rightbar-profile-img-container">
				<img src={onlineuser.profilePicture} alt="" className="rightbar-profile-img" />
				<span className="rightbar-online"></span>
			</div>
			<span className="rightbar-username">{onlineuser.name}</span>
		</li>
	</div>
  )
}

export default Online;