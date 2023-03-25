import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./Home.css";

const Home = () => {
  return (
	<div className="home">
		<Navbar />
		<div className="home-container">
           <Sidebar />
		   <Feed />
		   <Rightbar />
		</div>
	</div>
  )
}

export default Home;