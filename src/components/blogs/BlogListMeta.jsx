import React from "react";
import { getFirstLetterOfName, getPublishingDate } from "../../utils";

const BlogListMeta = ({ author, likes, createdAt }) => {
  return (
    <div className="flex justify-between items-center">
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

        <div>
          <h5 className="text-slate-500 text-sm">{`${author.firstName} ${author.lastName}`}</h5>
          <div className="flex items-center text-xs text-slate-700">
            <span>{getPublishingDate(createdAt)}</span>
          </div>
        </div>
      </div>

      <div className="text-sm px-2 py-1 text-slate-700">
        <span>{likes.length} Likes</span>
      </div>
    </div>
  );
};

export default BlogListMeta;
