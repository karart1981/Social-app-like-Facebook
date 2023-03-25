import React from 'react';
import { Usersonline } from '../../data';
import Online from "../online/Online";
import "./RightbarHome.css";

const RightBarHome = () => {
  return (
	<div className="rightbar-home">
	   <div className="birthday-container">
		  <img src="https://cdn.pixabay.com/photo/2013/07/12/15/40/present-150291__340.png" alt="" className="birthday-img" />
		  <span className="birthday-text">
			 <b>Robert de Niro </b> and <b>other friends</b> have a birthday today.
		  </span>
	   </div>
	   <img src="https://guardian.ng/wp-content/uploads/2021/03/Advertising.jpg" alt="" className="rightbar-advert" />

	   <span className="rightbar-title">Online Friends</span>

	   <ul className="rightbar-friend-list">
		  {Usersonline.map((u)=>(
             <Online key={u.id} onlineuser={u}/>
		  ))}
	   </ul>
	</div>
  )
}

export default RightBarHome;
