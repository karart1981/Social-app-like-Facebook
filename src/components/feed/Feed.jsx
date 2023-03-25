import React from 'react';
import Stories from '../stories/Stories';
import Share from '../share/Share';
import Post from '../post/Post';
import { Posts } from '../../data';
import "./Feed.css";

const Feed = () => {
  return (
	<div className="feed">
	   <div className="feed-wrapper">
		  <Stories />
		  <Share />
		  {Posts.map((p)=>(
			<Post key={p.id} post={p}/>
		  ))}
	   </div>
	</div>
  )
}

export default Feed;
