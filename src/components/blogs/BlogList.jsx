import React from "react";
import BlogCard from "./BlogCard";

const BlogList = ({ blogs,  }) => {
  return blogs && blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />);
};

export default BlogList;
