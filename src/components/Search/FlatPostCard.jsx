import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import RatioImg from "../PostCard/RatioImg";
import { Icons } from "../../static/svg/Icons";

function FlatPostCard(props) {
  const Detail = `/post/${props.i.id}`;
  const comen = JSON.parse(localStorage.getItem("comments") || "[]");
  const coments = comen.filter((i) => i.postId === props.i.id);

  return (
    <PostCardBlock>
      <div className="user-info">
        <img src="/imgs/user-thumbnail.png" alt="userIcon" />

        <div className="username">{props.i.writer}</div>
      </div>
      <Link to={Detail}>
        <RatioImg
          className="post-thumbnail"
          alt="post-thumbnail"
          widthRatio={1.91}
          heightRatio={1}
        />
      </Link>
      <Link to={Detail}>
        <h2>{props.i.title}</h2>
      </Link>
      <p>
        {/* item.content에서 html 태그 전부 삭제 */}
        {props.i.content.replace(/(<([^>]+)>)/gi, "").slice(0, 150)}
        {props.i.content.length === 150 && "..."}
      </p>
      <div className="subinfo">
        <span>{props.i.date}</span>
        <div className="separator">·</div>
        <span>{coments.length}개의 댓글</span>
        <div className="separator">·</div>
        <span className="likes">
          <Icons.LikeIcon />0
        </span>
      </div>
    </PostCardBlock>
  );
}

const PostCardBlock = styled.div`
  padding-top: 4rem;
  padding-bottom: 4rem;
  @media (max-width: 768px) {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  & > a {
    color: inherit;
    text-decoration: none;
  }
  &:first-child {
    padding-top: 0;
  }
  .user-info {
    display: flex;
    align-items: center;
    img {
      width: 3rem;
      height: 3rem;
      display: block;
      margin-right: 1rem;
      background-color: #f8f9fa;
      object-fit: cover;
      border-radius: 1.5rem;
      box-shadow: 0px 0 8px rgba(0, 0, 0, 0.1);
      @media (max-width: 768px) {
        width: 2rem;
        height: 2rem;
        border-radius: 1rem;
      }
    }
    .username {
      font-size: 0.875rem;
      color: #212529;
      font-weight: bold;
    }
    margin-bottom: 1.5rem;
    @media (max-width: 768px) {
      margin-bottom: 0.75rem;
    }
  }
  .post-thumbnail {
    margin-bottom: 1rem;
    @media (max-width: 768px) {
    }
  }
  line-height: 1.5;

  h2 {
    font-size: 1.5rem;
    margin: 0;
    color: #212529;
    word-break: keep-all;
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  p {
    margin-bottom: 2rem;
    margin-top: 0.5rem;
    font-size: 1rem;
    color: #495057;
    word-break: keep-all;
    overflow-wrap: break-word;
    @media (max-width: 768px) {
      font-size: 0.875rem;
      margin-bottom: 1.5rem;
    }
  }

  .subinfo {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    color: #868e96;
    font-size: 0.875rem;
    @media (max-width: 768px) {
      font-size: 0.75rem;
    }
    span {
    }
    .separator {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }
    .likes {
      display: flex;
      align-items: center;
      svg {
        width: 0.875rem;
        height: 0.875rem;
        margin-right: 0.25rem;
      }
    }
  }

  & + & {
    border-top: 1px solid #ced4da;
  }
`;

export default FlatPostCard;
