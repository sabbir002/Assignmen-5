import React from "react";
import { getFirstLetterOfName, getPublishingDate } from "../../utils";

const BlogHeader = ({ data }) => {
  const { title, author, thumbnail, tags, likes, createdAt } = data;
  const blogTags = tags.split(",");
  console.log(`${import.meta.env.VITE_SERVER_URL}/uploads/blogs/${thumbnail}`);

  return (
    <>
      <h1 className="font-bold text-3xl md:text-5xl">{title}</h1>
      <div className="flex justify-center items-center my-4 gap-4">
        <div className="flex items-center capitalize space-x-2">
          <div className="avater-img bg-indigo-600 text-white">
            <span className="">
              {author?.avatar ? (
                <img
                  src={`${import.meta.env.VITE_SERVER_URL}/uploads/avatar/${
                    author?.avatar
                  }`}
                  alt="profile image"
                  className="rounded-full"
                />
              ) : (
                getFirstLetterOfName(author?.firstName)
              )}
            </span>
          </div>
          <h5 className="text-slate-500 text-sm">{`${author?.firstName} ${author?.lastName}`}</h5>
        </div>
        <span className="text-sm text-slate-700 dot">
          {getPublishingDate(createdAt)}
        </span>
        <span className="text-sm text-slate-700 dot">
          {likes?.length} Likes
        </span>
      </div>
      <img
        className="mx-auto w-full md:w-8/12 object-cover h-80 md:h-96"
        src={`${import.meta.env.VITE_SERVER_URL}/uploads/blog/${thumbnail}`}
        alt="Blog Thumbnail"
      />

      <ul className="tags">
        {blogTags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </>
  );
};

export default BlogHeader;
