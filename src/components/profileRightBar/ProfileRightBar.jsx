import React from 'react'
import "./profileRightBar.scss"

const ProfileRightBar = () => {
  return (
    <div className='profileRightBar'>
      <div className='profileRightBarHeading'>
        <span className="profileRightBarTitle">User Information  </span>
        <span className="editButton">Edit Profile</span>
      </div>

      <div className="profileRightBarInfo">
        <div className="profileRightBarInfoIcon">
            <span className="profileRightBarInfoKey">Email: </span>
            <span className="profileRightBarInfoValue">amberlogan@gmail.com</span>
        </div>
        <div className="profileRightBarInfoIcon">
            <span className="profileRightBarInfoKey">Phone Number: </span>
            <span className="profileRightBarInfoValue">+1 201-889-3021</span>
        </div>
        <div className="profileRightBarInfoIcon">
            <span className="profileRightBarInfoKey">Address: </span>
            <span className="profileRightBarInfoValue">Broadway New Jersey</span>
        </div>
        <div className="profileRightBarInfoIcon">
            <span className="profileRightBarInfoKey">Country: </span>
            <span className="profileRightBarInfoValue">United States</span>
        </div>
        <div className="profileRightBarInfoIcon">
            <span className="profileRightBarInfoKey">Age: </span>
            <span className="profileRightBarInfoValue">59</span>
        </div>

      </div>
      
    </div>
  )
}

export default ProfileRightBar
