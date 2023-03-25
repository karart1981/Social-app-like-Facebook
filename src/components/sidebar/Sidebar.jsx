import React from 'react';
import "./Sidebar.css";
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import VideocamIcon from '@mui/icons-material/Videocam';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import TodayIcon from '@mui/icons-material/Today';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import MenuLink from '../menuLink/MenuLink';
import Friends from '../friends/Friends';
import { Users } from './../../data';


const Sidebar = () => {
  return (
	<div className="sidebar">
	    <div className="sidebar-wrapper">
			<MenuLink icon={<RssFeedIcon />} text={"Feed"}/>
			<MenuLink icon={<ChatIcon />} text={"Chats"}/>
			<MenuLink icon={<VideocamIcon />} text={"Videos"}/>
			<MenuLink icon={<Diversity3Icon />} text={"Friends"}/>
			<MenuLink icon={<BookmarkIcon />} text={"Bookmarks"}/>
			<MenuLink icon={<LocalGroceryStoreIcon />} text={"Marketplace"}/>
			<MenuLink icon={<TodayIcon />} text={"Events"}/>
			<MenuLink icon={<DarkModeIcon />} text={"Theme"}/>
			<MenuLink icon={<ExitToAppIcon />} text={"Logout"}/>

			<button className="sidebar-btn">Show more</button>
			<hr className="sidebarHr" />

			<ul className="sidebar-friend-list">
				{Users.map((u)=> (
				  <Friends key={u.id} user={u}/>
				))}
			</ul>
		</div>
	</div>
  )
}

export default Sidebar;

