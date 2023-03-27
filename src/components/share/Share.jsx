import React,{useState} from 'react';
import "./Share.css";
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import { EmojiEmotions, PermMedia, Close } from '@mui/icons-material';

const Share = () => {
  const [file,setFile] = useState(null);

  const removeImage = () => {
	setFile(null);
  };
  return (
	<div className="share">
	   <div className="share-wrapper">
		  <div className="share-top">
			 <img 
			   src="https://dalma.news/wp-content/uploads/2017/04/o-AZNAVOUR-facebook.jpg" 
			   alt="" 
			   className="share-profile-img" 
			   />
			   <input 
			   type="text" 
			   placeholder="What's on your mind ?"
			   className="share-input"
			   />
		  </div>
		  <hr className="shareHr" />
		  {file && <div className="share-img-container">
			<img src={URL.createObjectURL(file)} alt="" className="share-img"/>
			<Close className="share-cancel-img" onClick={removeImage} />
			</div>}
		  <div className="share-bottom">
			 <div className="share-options">
				<div className="share-option">
					<VideoCameraFrontIcon 
					  className="share-icon"
					  style={{color:"#bb0000f2"}}
					  />
					<span className="share-option-text">Live Video</span>
				</div>
				<label htmlFor='file' className="share-option">
					<PermMedia 
					  className="share-icon"
					  style={{color:"#2e0196f1"}}
					  />
					<span className="share-option-text">Photo/Video</span>
					<input 
					  type="file" 
					  id="file" 
					  accept=".png, .jpeg, .jpg" 
					  style={{display:"none"}}
					  onChange={(e) => setFile(e.target.files[0])}
					/>
				</label>
				<div className="share-option">
					<EmojiEmotions 
					  className="share-icon"
					  style={{color:"#bfc600ec"}}
					  />
					<span className="share-option-text">Feelings/Activity</span>
				</div>
			 </div>
		  </div>
	   </div>
	</div>
  )
}

export default Share;
