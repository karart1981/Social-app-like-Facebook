import React from 'react';
import './Navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {Link} from "react-router-dom";
const Navbar = () => {
  return (
	<div className="navbar-container">
		<div className="navbar-left">
			<Link to="/" style={{textDecoration:"none"}}>
			   <span className="logo">
				  Day & Night
			   </span>
			</Link>
		</div>
		<div className="navbar-center">
			<div className="search-bar">
				<SearchIcon className="search-icon"/>
				<input type="text" placeholder="Search for friends post or video" className="search-input"/>
			</div>
		</div>
		<div className="navbar-right">
			<div className="navbar-links">
				<span className="navbar-link">
				  Home
				</span>
				<span className="navbar-link">
                  Timeline
				</span>
			</div>
			<div className="navbar-icons">
				<div className="navbar-icon-item">
                   <PersonIcon />
				   <span className="navbar-icon-badge">2</span>
				</div>
				<div className="navbar-icon-item">
                   <ChatBubbleIcon />
				   <span className="navbar-icon-badge">10</span>
				</div>
				<div className="navbar-icon-item">
                   <NotificationsIcon />
				   <span className="navbar-icon-badge">8</span>
				</div>
			</div>
			<Link to="/profile/userId">
			   <img src="https://ichef.bbci.co.uk/news/1024/cpsprodpb/780E/production/_103643703_6e1d448c-a23c-4ce3-a4f4-e1a97c11a185.jpg" alt="" className="navbar-img" />
			</Link>
			
		</div>
	</div>
  )
}

export default Navbar;