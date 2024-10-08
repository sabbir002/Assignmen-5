import DOMPurify from "dompurify";
import React from "react";

const BlogContent = ({ content }) => {
  
  return (
    <div
      className="mx-auto w-full md:w-10/12 text-slate-300 text-base md:text-lg leading-8 py-2 !text-left"
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(content),
      }}
    ></div>
  );
};

export default BlogContent;
