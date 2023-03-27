import React from 'react';
import {Link} from 'react-router-dom';
import "./ProfileRightBar.css";

const ProfileRightBar = () => {
  return (
	<div className="profile-rightbar">
		<div className="profile-rightbar-heading">
			<span className="profile-rightbar-title">User Information</span>
			<Link to="/profile/userId/edit" style={{textDecoration:"none"}}>
			   <span className="edit-button">Edit Profile</span>
			</Link>
		</div>

		<div className="profile-rightbar-info">
			<div className="profile-rightbar-info-item">
				<span className="profile-rightbar-info-key">Email:</span>
				<span className="profile-rightbar-info-value">aznavur01@gmail.com</span>
			</div>
			<div className="profile-rightbar-info-item">
				<span className="profile-rightbar-info-key">Phone Number:</span>
				<span className="profile-rightbar-info-value">+33 505-35-35-53</span>
			</div>
			<div className="profile-rightbar-info-item">
				<span className="profile-rightbar-info-key">Address:</span>
				<span className="profile-rightbar-info-value">Verin Antarayin str. 14/1, Yerevan</span>
			</div>
			<div className="profile-rightbar-info-item">
				<span className="profile-rightbar-info-key">Country:</span>
				<span className="profile-rightbar-info-value">Armenia</span>
			</div>
			<div className="profile-rightbar-info-item">
				<span className="profile-rightbar-info-key">Profession:</span>
				<span className="profile-rightbar-info-value">Singer</span>
			</div>
		</div>
		
		<h4 className="profile-rightbar-title">Close Friends</h4>
		<div className="profile-rightbar-followings">
			<div className="profile-rightbar-following">
				<img src="https://m.photos.timesofindia.com/thumb.cms?msid=49870481&width=500&resizemode=4" alt="" className="profile-rightbar-following-img" />
				<span className="profile-rightbar-following-name">Monica Bellucci</span>
			</div>
			<div className="profile-rightbar-following">
				<img src="https://www.peoples.ru/art/cinema/actor/marceau/marceau_70.jpg" alt="" className="profile-rightbar-following-img" />
				<span className="profile-rightbar-following-name">Sofi Marson</span>
			</div>
			<div className="profile-rightbar-following">
				<img src="https://upload.wikimedia.org/wikipedia/commons/b/bd/1990_Venice_Film_Festival_Robert_De_Niro.jpg" alt="" className="profile-rightbar-following-img" />
				<span className="profile-rightbar-following-name">Robert de Niro</span>
			</div>
			<div className="profile-rightbar-following">
				<img src="https://cdn.britannica.com/84/200584-050-7EC3F3F6/Jim-Carrey-2012.jpg?w=400&h=300&c=crop" alt="" className="profile-rightbar-following-img" />
				<span className="profile-rightbar-following-name">Jim Carrey</span>
			</div>
			<div className="profile-rightbar-following">
				<img src="https://i.pinimg.com/736x/82/87/9b/82879bef4cbe1b0dd1fe0528b409124e.jpg" alt="" className="profile-rightbar-following-img" />
				<span className="profile-rightbar-following-name">Ornella Muti</span>
			</div>
			<div className="profile-rightbar-following">
				<img src="https://images.hellomagazine.com/imagenes/celebrities/20220822148937/will-smith-reputation-tanked-upcoming-role-revealed/0-724-612/will-smith-reputation-oscars-next-role-t.jpg" alt="" className="profile-rightbar-following-img" />
				<span className="profile-rightbar-following-name">Will Smith</span>
			</div>
		</div>
	</div>
  )
}

export default ProfileRightBar;