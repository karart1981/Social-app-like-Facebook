import React from 'react';
import RightbarHome from "../rightbarhome/RightbarHome";
import ProfileRightBar from '../profileRightBar/ProfileRightBar';
import "./Rightbar.css";
const Rightbar = ({profile}) => {
  return (
	<div className="rightbar">
	   <div className="rightbar-wrapper">
		   {profile? <ProfileRightBar /> : <RightbarHome />}
	   </div>
	</div>
  )
}

export default Rightbar;
