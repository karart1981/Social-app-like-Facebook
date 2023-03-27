import React from 'react';
import './Post.css';
import { Users } from '../../data';
import { IconButton } from '@mui/material';
import { MoreVert, EmojiEmotions, PermMedia, Favorite, ThumbUp, ThumbUpAltOutlined, ChatBubbleOutline, ShareOutlined } from '@mui/icons-material';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import {Link} from 'react-router-dom';

const Post = ({post}) => {
	return (
	<div className="post">
       <div className="post-wrapper">
		   <div className="post-top">
			 <div className="post-top-left">
				<Link to="/profile/userId">
				    <img src={Users.filter((u)=>u.id === post.userId)[0].profilePicture} alt="" className="post-profile-img"/>
				</Link>
				<span className="post-username">{Users.filter((u)=> u.id === post.userId)[0].name}</span>
				<span className="post-date">{post.date}</span>
			 </div>
			 <div className="post-top-right">
                <IconButton>
					<MoreVert className="post-vert-btn"/>
				</IconButton>
			 </div>
		   </div>
		   <div className="post-center">
			  <span className="post-text">{post.body}</span>
			  <img src={post.photo} alt="" className="post-img"/>
		   </div>
		   <div className="post-bottom">
			  <div className="post-bottom-left">
				 <Favorite className="bottom-left-icon" style={{color:"#EB0008"}}/>
				 <ThumbUp className="bottom-left-icon" style={{color:"#011631"}}/>
				 <span className="post-like-counter">{post.like}</span>
			  </div>
			  <div className="post-bottom-right">
				  <span className="post-comment-text">
					{post.comment} . comments . share
				  </span>
			  </div>
		   </div>

		   <hr className="footerHr" />
		   <div className="post-bottom-footer">
			  <div className="post-bottom-footer-item">
				<ThumbUpAltOutlined className="footer-icon"/>
				<span className="footer-text">Like</span>
			  </div>
			  <div className="post-bottom-footer-item">
				<ChatBubbleOutline className="footer-icon"/>
				<span className="footer-text">Comment</span>
			  </div>
			  <div className="post-bottom-footer-item">
				<ShareOutlined className="footer-icon"/>
				<span className="footer-text">Share</span>
			  </div>
		   </div>
	   </div>
	</div>
  )
}

export default Post;