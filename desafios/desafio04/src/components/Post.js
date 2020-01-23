import React from "react";
import Comment from "./Comment";

import "./Post.css";

const Post = ({ data }) => {
  const { author, date, content, comments } = data;

  return (
    <div className="post-container">
      <div className="post-header">
        <div className="post-header-image" />
        <div className="post-header-content">
          <p className="post-header-name">{author.name}</p>
          <p className="post-header-date">{date}</p>
        </div>
      </div>
      <p className="post-content">{content}</p>
      <div className="post-line" />
      {comments.map(comment => (
        <Comment key={comment.id} data={comment} />
      ))}
    </div>
  );
};

export default Post;
