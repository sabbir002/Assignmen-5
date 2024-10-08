import React from "react";
import SingleComment from "./SingleComment";

const CommentLists = ({ comments }) => {
  return (
    <>
      {comments &&
        comments?.map((comment) => (
          <SingleComment key={comment?.id} comment={comment} />
        ))}
    </>
  );
};

export default CommentLists;
