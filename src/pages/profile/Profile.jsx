import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import Navbar from "../../components/navbar/Navbar";
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from "../../components/feed/Feed";
import "./profile.scss";

const Profile = () => {
  // Use useParams to get the userId from the URL
 

  return (
    <div className='profile'>
      <Navbar />
      <div className='profileWrapper'>
        <Sidebar />
        <div className='profileRight'>
          <div className='profileRightTop'>
            <div className='profileCover'>
              <img src="/assets/profileCover/profilecover.jpg" alt="" className='profileCoverImg'/>
              <img src="/assets/person/user.jpg" alt="" className='profileUserImg'/>
            </div>
            <div className='profileInfo'>
              <h4 className='profileInfoName'> Amber Logam</h4>
              <span className="profileInfoDesc">Hi Friends</span>
            </div>
          </div>
          <div className='profileRightBottom'>
            <Feed />
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
