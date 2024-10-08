import React from "react";
import { useProfile } from "../../hooks/useProfile";
import BlogList from "../blogs/BlogList";

const Blogs = () => {
  const { state } = useProfile();
  const blogs = state?.user?.blogs;
  console.log(blogs);
  return (
    <>
      <h4 className="mt-6 text-xl lg:mt-8 lg:text-2xl">Your Blogs</h4>
      <BlogList blogs={blogs}/>
    </>
  );
};

export default Blogs;
