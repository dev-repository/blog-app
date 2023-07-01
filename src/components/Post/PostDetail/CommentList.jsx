import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

function CommentList() {
  //id 저장용, 항상 맨위에 있어함
  const { id } = useParams();

  //로그인정보 가져오기
  const sessoin = JSON.parse(localStorage.getItem("session") || "[]");

  //댓글 로컬스토리지에서 가져오기
  const comen = JSON.parse(localStorage.getItem("comments") || "[]");

  const [commentInfo, setCommentInfo] = useState([]);

  //데이터를 가져오는 역활
  useEffect(() => {
    const findComment = comen.filter((item) => item.postId === id);
    if (findComment) {
      setCommentInfo(findComment);
    }
  }, [id]);

  //댓글 삭제
  //밑에서 리턴된 id값으로 값을 제외하고 로컬스토리지에서 재배치
  const deleteComment = (id) => {
    const confirm = window.confirm("정말로 삭제하시겠습니까?");
    if (confirm) {
      localStorage.setItem(
        "comments",
        JSON.stringify([...comen].filter((item) => item.id !== id))
      );
      alert("삭제 완료!");
    }
    window.location.reload();
  };

  return (
    <PostCommentItemBlock className="comment">
      {commentInfo.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <CommentHead>
              <div className="profile">
                <img src="/imgs/user-thumbnail.png" alt="user-thumbnail" />
                <div className="comment-info">
                  <div className="username">{item.userId}</div>
                  <div className="date">{item.commentDate}</div>
                </div>
              </div>
              {sessoin.userId === item.userId ? (
                <div className="actions">
                  <span>수정</span>
                  <span onClick={() => deleteComment(item.id)}>삭제</span>
                </div>
              ) : null}
            </CommentHead>

            <CommentConent>
              <p>{item.comment}</p>
            </CommentConent>

            <Separator />
          </React.Fragment>
        );
      })}
    </PostCommentItemBlock>
  );
}

const PostCommentItemBlock = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  & + & {
    border-top: 1px solid #f1f3f5;
  }
`;

const CommentHead = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .profile {
    display: flex;
    align-items: center;
    img {
      width: 3.375rem;
      height: 3.375rem;
      display: block;
      border-radius: 50%;
      object-fit: cover;
      @media (max-width: 768px) {
        width: 2.5rem;
        height: 2.5rem;
      }
    }
    .comment-info {
      margin-left: 1rem;
      @media (max-width: 768px) {
        margin-left: 0.5rem;
      }
      line-height: 1;
      .username {
        font-size: 1rem;
        font-weight: bold;
        color: #212529;
        @media (max-width: 768px) {
          font-size: 0.875rem;
        }
      }
      .date {
        margin-top: 0.5rem;
        color: #868e96;
        font-size: 0.875rem;
        @media (max-width: 768px) {
          font-size: 0.75rem;
        }
      }
    }
  }
  .actions {
    font-size: 0.875rem;
    @media (max-width: 768px) {
      font-size: 0.75rem;
    }

    color: #868e96;
    span {
      cursor: pointer;
      &:hover {
        color: #868e96;
        text-decoration: underline;
      }
    }
    span + span {
      margin-left: 0.5rem;
    }
  }
`;

const CommentConent = styled.div`
  font-size: 1.125rem;
  color: #212529;
  transition: color 0.125s ease-in 0s;
  line-height: 1.7;
  letter-spacing: -0.004em;
  word-break: keep-all;
  overflow-wrap: break-word;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Separator = styled.div`
  background: #e9ecef;
  width: 100%;
  height: 1px;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  @media (max-width: 768px) {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

export default CommentList;
