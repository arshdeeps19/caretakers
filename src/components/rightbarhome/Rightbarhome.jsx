import React from "react";
import Online from "../online/Online";
import { Usersonline } from "../../data";
import "./Rightbarhome.scss";
import Friends from "../friends/Friends";
import { Users } from "../../data";

const Rightbarhome = () => {
  return (
   <div className="rightbarhome">
      <span className="rightbarTitle">Volunteers</span>
     
      <ul className="sidebarFriendList">
          {Users.map((u) => (
            <Friends key={u.id} user={u} />
          ))}
          </ul>

      <span className="rightbarTitle">Online Friends</span>

      <ul className="rightbarFriendList">
        {Usersonline.map((u) => (
          <Online key={u.id} onlineuser={u} />
        ))}
      </ul>
    </div>
  );
};

export default Rightbarhome;
