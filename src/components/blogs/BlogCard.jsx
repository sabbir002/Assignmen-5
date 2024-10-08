import React from "react";
import BlogListMeta from "./BlogListMeta";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { title, content, thumbnail, author, likes, createdAt, id } = blog;
  return (
    <div className="my-6 space-y-4" >
      <Link to={`/blogs/${id}`}>
      <div className="blog-card">
        <img
          className="blog-thumb"
          src={`${import.meta.env.VITE_SERVER_URL}/uploads/blog/${thumbnail}`}
          alt="thumbnail"
        />
        <div className="mt-2">
          <h3 className="text-slate-300 text-xl lg:text-2xl">{title}</h3>
          <p className="mb-6 text-base text-slate-500 mt-1">
            {content.substr(0, 150) + " ..."}
          </p>
          <BlogListMeta author={author} likes={likes} createdAt={createdAt} />
        </div>
      </div>
      </Link>
    </div>
  );
};

export default BlogCard;
