import React from 'react';
import './Stories.css';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import StoryCard from '../storyCard/StoryCard';
import { Users } from './../../data';
const Stories = () => {
  return (
	<div className="stories">
		<div className="story-card">
			<div className="overlay"></div>
			<img 
			  src="https://ichef.bbci.co.uk/news/1024/cpsprodpb/780E/production/_103643703_6e1d448c-a23c-4ce3-a4f4-e1a97c11a185.jpg" 
			  alt="" 
			  className="story-profile"
			/>
			<img 
			  src="https://ichef.bbci.co.uk/news/1024/cpsprodpb/780E/production/_103643703_6e1d448c-a23c-4ce3-a4f4-e1a97c11a185.jpg" 
			  alt="" 
			  className="story-background"
			/>
			<AddCircleIcon className="story-add" style={{"fontSize":"35px"}}/>
		</div>
		{Users.map((u)=>(
           <StoryCard key={u.id} user={u}/>
		))}
	</div>
  )
}

export default Stories;