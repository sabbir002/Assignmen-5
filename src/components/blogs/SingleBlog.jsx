import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../api";
import BlogAction from "./BlogAction";
import BlogComments from "./BlogComments";
import BlogContent from "./BlogContent";
import BlogHeader from "./BlogHeader";

const SingleBlog = () => {
  const [singleBlog, setSingleBlog] = useState([]);
  let { blogId } = useParams();
  console.log(blogId);
  useEffect(() => {
    const getSingleBlog = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_URL}/blogs/${blogId}`
        );
        if (response.status === 200) {
          setSingleBlog(response?.data);
          console.log("success");
          console.log(response?.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getSingleBlog();
  }, []);

  if (singleBlog.length === 0) {
    console.log("0");
    return <div>Loading...</div>;
  }
  return (
    <section>
      <div className="container text-center py-8">
        <BlogHeader data={singleBlog} />
        <BlogContent content={singleBlog?.content} />
        <BlogComments comments={singleBlog?.comments} />
        <BlogAction
          postId={singleBlog?.id}
          commentCount={singleBlog.comments?.length}
        />
      </div>
    </section>
  );
};

export default SingleBlog;
