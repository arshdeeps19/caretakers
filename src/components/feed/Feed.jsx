import React from "react"
import { Posts } from "../../data"
import Post from "../post/Post"
import Chat from '../Chat/ChatComponent'; // Go up one level, then to Chat/
 // Adjust this if Chat is in a different directory
import "./feed.scss"

const Feed = ({ currentUser }) => { // Ensure currentUser is passed as a prop to Feed or obtained from a context
  return (
    <div className="feed">
      <div className="feedWrapper">
        <h1>Feed</h1>
        {currentUser && <Chat user={currentUser} />}
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;