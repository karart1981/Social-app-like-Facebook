import React from 'react';
import "./MenuLink.css";

const MenuLink = ({icon,text}) => {
  return (
	<div className="menu-link">
       {icon}
       <span className="menu-link-text">{text}</span>
	   <span className="menu-link-text-name">{text === "Logout"}</span>
	</div>
  )
}

export default MenuLink;
