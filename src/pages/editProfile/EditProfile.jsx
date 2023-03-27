import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import "./EditProfile.css";
import { DriveFolderUploadOutlined } from '@mui/icons-material';

const EditProfile = () => {
  return (
	<div className="edit-profile">
		<Navbar />
		<div className="edit-profile-wrapper">
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
				<div className="edit-profile-right-bottom">
					<div className="top">
						<h1>Edit User Profile</h1>
					</div>
					<div className="bottom">
						<div className="left">
							<img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" alt="" />
						</div>
						<div className="right">
							<form>
                                <div className="form-input">
								  <label htmlFor="file">
									Image: <DriveFolderUploadOutlined className="icon" />
								  </label>
								  <input type="file" id="file" style={{display:"none"}}/>
							    </div>
							    <div className="form-input">
								  <input type="text" placeholder="Name:  Charles Aznavour"/>
							    </div>
							    <div className="form-input">
								  <input type="email" placeholder="Email:  info@charlesaznavour.com"/>
							    </div>
							    <div className="form-input">
								  <input type="text" placeholder="Phone:  +(374 10) 000-000"/>
							    </div>
							    <div className="form-input">
								  <input type="text" placeholder="Address:  192 Verin Antarain, Yerevan"/>
							    </div>
							    <div className="form-input">
								  <input type="text" placeholder="Country:  Armenia"/>
							    </div>
							    <button type="submit" className="update-btn">Update Profile</button>
							</form>
							
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default EditProfile;