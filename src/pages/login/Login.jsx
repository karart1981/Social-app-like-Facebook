import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
	<div className="login">
	   <div className="login-wrapper">
		  <div className="login-left">
			<h3 className="login-logo">Day & Night</h3>
			<span className="login-desc">
				Connect with friends and the world around you on Day & Night.
			</span>
		  </div>
		  <div className="login-right">
				<div className="login-box">
					<div className="bottom">
						<form className="login-bottom-box">
							<input 
							  type="email" 
							  placeholder="Email" 
							  id="email" 
							  className="login-input"
							  required
							  />
							<input 
							  type="password" 
							  placeholder="Password" 
							  id="password" 
							  className="login-input"
							  required
							  />
							  <button 
							    type="submit"
							    className="login-btn">
									Sign In
							  </button>
							  <Link to="/register">
							     <button 
							       className="login-to-register-btn">
								      Create a new Account
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

export default Login;
