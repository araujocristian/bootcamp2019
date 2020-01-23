import React from "react";

import "./Comment.css";

const Comment = ({ data }) => {
  console.log(data);
  const { author, content } = data;
  return (
    <div className="comment-container">
      <img src={author.avatar} className="comment-image" />
      <p className="comment-content">
        <span className="comment-name">{`${author.name} `}</span>
        <span className="comment-text">{content}</span>
      </p>
    </div>
  );
};

export default Comment;
