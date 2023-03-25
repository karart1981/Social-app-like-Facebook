import React from 'react';
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./Profile.css";

const Profile = () => {
  return (
	<div className="profile">
		<Navbar />
		<div className="profile-wrapper">
			<Sidebar />
			<div className="profile-right">
				<div className="profile-right-top">
					<div className="profile-right-top">
						<div className="profile-cover">
							<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Mount_Ararat_and_the_Araratian_plain_%28cropped%29.jpg/1200px-Mount_Ararat_and_the_Araratian_plain_%28cropped%29.jpg" alt="" className="profile-cover-img"/>
							<img src="https://ichef.bbci.co.uk/news/1024/cpsprodpb/780E/production/_103643703_6e1d448c-a23c-4ce3-a4f4-e1a97c11a185.jpg" alt="" className="profile-user-img"/>
						</div>
						<div className="profile-info">
							<h4 className="profile-info-name">Charles Aznavour</h4>
							<span className="profile-info-desc">Hi Friends!</span>
						</div>
					</div>
				</div>
				<div className="profile-right-bottom">
					<Feed />
					<Rightbar profile/>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Profile;