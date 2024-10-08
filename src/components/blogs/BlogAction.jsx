import React from "react";
import CommentIcon from "../../assets/icons/comment.svg";
import HeartIcon from "../../assets/icons/heart.svg";
import LikeIcon from "../../assets/icons/like.svg";
const BlogAction = ({ postId, commentCount }) => {
  console.log(postId);
  return (
    <div className="floating-action">
      <ul className="floating-action-menus">
        <li>
          <img src={LikeIcon} alt="like" />
          <span>10</span>
        </li>

        <li>
          <img src={HeartIcon} alt="Favorite" />
        </li>
        <a href="#comments">
          <li>
            <img src={CommentIcon} alt="Comments" />
            <span>{commentCount}</span>
          </li>
        </a>
      </ul>
    </div>
  );
};

export default BlogAction;
