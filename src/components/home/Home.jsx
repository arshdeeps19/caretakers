import React from "react";
import Feed from "../feed/Feed";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import "./Home.css";
import Rightbar from "../rightbar/Rightbar";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </div>
  );
};

export default Home;


