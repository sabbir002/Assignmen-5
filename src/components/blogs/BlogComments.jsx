import React from "react";
import CommentForm from "./CommentForm";
import CommentLists from "./CommentLists";

const BlogComments = ({ comments }) => {
  return (
    <section id="comments">
      <div className="mx-auto w-full md:w-10/12 container">
        <h2 className="text-3xl font-bold my-8">
          Comments ({comments?.length})
        </h2>
        <CommentForm />
        {comments && <CommentLists comments={comments} />}
      </div>
    </section>
  );
};

export default BlogComments;
