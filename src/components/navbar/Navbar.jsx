import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AssistantIcon from '@mui/icons-material/Assistant';
import "./navbar.scss"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbarContainer">
        <div className="navbarLeft">
            <Link to="/" style={{textDecoration: "none"}}>
            <span className='logo' >CareTakers</span>
            </Link>
           
        </div>
        <div className="navbarCenter">
            <div className="searchBar">
            <SearchIcon className='searchIcon'/> 
            <input type="text" placeholder='Search for posts or videos' 
            className='searchInput'/>
        </div>
        </div>
        <div className="navbarRight">
            <div className="navbarLinks">
                <span className='navbarLink'>Home Page</span>
                <span className='navbarLink'>Timeline</span>
            </div>
            <div className='navbarIcons'>
                {/*<div className='navbarIconItems'>
                    <PersonIcon />
                    <span className="navbarIconBadge">2</span>
                </div>
                <div className='navbarIconItems'>
                    <ChatIcon />
                    <span className="navbarIconBadge">10</span>
                </div>
                <div className='navbarIconItems'>
                    <MusicVideoIcon />
                    <span className="navbarIconBadge">30</span>
  </div>*/}
                <div className='navbarIconItems'>
                    <AssistantIcon/>
                    <span className="navbarIconBadge"></span>
  </div>
                <div className='navbarIconItems'>
                    <NotificationsActiveIcon/>
                    <span className="navbarIconBadge">5</span>
                </div>

            </div>
            <Link to="/profile/userId">
            <img src='/assets/person/user.jpg' alt="" className='navbarImg' />
            </Link>
        </div>
    </div>
  )
}

export default Navbar
