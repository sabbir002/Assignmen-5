import React from "react";
import { useAvatar } from "../../hooks/useAvatar";

const SingleComment = ({ comment }) => {
  const { avatarURL } = useAvatar(comment?.user);
  return (
    <div className="flex items-start space-x-4 my-8">
      <div className="avater-img bg-orange-600 text-white">
        <span className="">
          <img src={avatarURL} alt="avatar" />
        </span>
      </div>
      <div className="w-full">
        <h5 className="text-slate text-left -500 font-bold">{`${comment?.author?.firstName} ${comment?.author?.lastName}`}</h5>
        <p className="text-slate-300 text-justify">{comment?.content}</p>
      </div>
    </div>
  );
};

export default SingleComment;
