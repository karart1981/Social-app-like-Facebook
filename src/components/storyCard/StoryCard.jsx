import React from 'react';
import './StoryCard.css';

const StoryCard = ({user}) => {
  return (
	<div className="story-card">
		<div className="overlay"></div>
		<img src={user.profilePicture} alt="" className="story-profile"/>
			<img src={user.profilePicture} alt="" className="story-background"/>
	</div>
  )
}

export default StoryCard;