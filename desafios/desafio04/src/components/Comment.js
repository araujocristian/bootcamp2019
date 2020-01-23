import React from "react";

import "./Comment.css";

const Comment = ({ data }) => {
  console.log(data);
  const { author, content } = data;
  return (
    <div className="comment-container">
      <div className="comment-image" />
      <p className="comment-content">
        <spam className="comment-name">{`${author.name} `}</spam>
        <spam className="comment-text">{content}</spam>
      </p>
    </div>
  );
};

export default Comment;
