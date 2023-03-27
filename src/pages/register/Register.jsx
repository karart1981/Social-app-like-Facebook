import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import { DriveFolderUploadOutlined } from '@mui/icons-material';

const Register = () => {
  return (
	<div className="register">
		<div className="register-wrapper">
			<div className="register-left">
				<h3 className="register-logo">Day & Night</h3>
				<span className="register-desc">
					Connect with friends and the world around you on Day & Night.
				</span>
			</div>
			<div className="register-right">
				<div className="register-box">
					<div className="top">
						<img 
						  src="https://toppng.com/uploads/preview/user-account-management-logo-user-icon-11562867145a56rus2zwu.png" 
						  alt="" 
						  className="profile-img"
						  />
						<div className="form-input">
							<label htmlFor="file">
							  Image: <DriveFolderUploadOutlined className="icon"/>
							  <input 
							    type="file"
								name="file"
								id="file"
                                accept=".png,.jpeg,.jpg"
								style={{display:"none"}}
								/>
							</label>
						</div>
					</div>
					<div className="bottom">
						<form className="bottom-box">
							<input 
							  type="text" 
							  placeholder="Username" 
							  id="username" 
							  className="register-input"
							  required
							  />
							<input 
							  type="email" 
							  placeholder="Email" 
							  id="email" 
							  className="register-input"
							  required
							  />
							<input 
							  type="password" 
							  placeholder="Password" 
							  id="password" 
							  className="register-input"
							  required
							  />
							<input 
							  type="password" 
							  placeholder="Confirm Password" 
							  id="confirmPassword" 
							  className="register-input"
							  required
							  />
							  <button 
							    type="submit"
							    className="register-btn">
									Sign Up
							  </button>
							  <Link to="/login">
							     <button 
							       className="login-register-btn">
								      Log Into Account
							     </button>
							  </Link>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}
export default Register;
