import React from "react";
import "./post.scss";
import { Users } from "../../data";
import { IconButton } from "@mui/material";
import { ChatBubbleOutline, Favorite, MoreVert, ShareOutlined, ThumbUp, ThumbUpOffAltOutlined } from "@mui/icons-material";

const Post = ({ post }) => {
  console.log(post);
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img 
            src={Users.filter((u)=> u.id===post.userId)[0].profilePicture}
             alt="" className="postProfileImg" />
            <span className="postUsername">
              {Users.filter((u) => u.id === post.userId)[0].username}
              </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <IconButton>
              <MoreVert className="postVertButton"/>
            </IconButton>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.body}</span>
          {/* Check if post has a photo */}
          {post.photo && <img src={post.photo} alt="" className="postImg" />}
          {/* Check if post has a video */}
          {post.video && (
            <video className="postVideo" controls>
              <source src={post.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
          
        <div className="postBottom">
          <div className="postBottomLeft">
            <Favorite className="bottomLeftIcon" style={{color:"red"}}/>
            <ThumbUp className="bottomLeftIcon" style={{color:"purple"}}/>
            <span className="postLikeCounter">{post.like}</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} • comments • share
             </span>
          </div>

        </div>
          
        <hr className="footerHr" />
        <div className="postBottomFooter">
          <div className="postBottomFooterItem">
            <ThumbUpOffAltOutlined className="footerIcon" />
            <span className="footerText">Like</span>
          </div>
          <div className="postBottomFooterItem">
            <ChatBubbleOutline className="footerIcon" />
            <span className="footerText">Comment</span>
          </div>
          <div className="postBottomFooterItem">
            <ShareOutlined className="footerIcon" />
            <span className="footerText">Share</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
