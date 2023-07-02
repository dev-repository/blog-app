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

  //댓글 수정 토글 작업.
  const [toggle, setToggle] = useState(false);

  //수정 버튼
  const onEdting = (id) => {
    const selectId = comen.find((item) => item.id === id);
    if (id == selectId.id) {
      setToggle(true);
    }
    console.log("selectId값", selectId.id);
    console.log("id값", id);
  };

  //수정 취소시
  const offEdting = () => {
    setToggle(false);
  };

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
                <>
                  {toggle ? (
                    <div className="actions">
                      <span onClick={() => deleteComment(item.id)}>삭제</span>
                    </div>
                  ) : (
                    <div className="actions">
                      <span onClick={() => onEdting(item.id)}>수정</span>
                      <span onClick={() => deleteComment(item.id)}>삭제</span>
                    </div>
                  )}
                </>
              ) : null}
            </CommentHead>

            {toggle ? (
              <>
                <PostCommentsWriteBlock>
                  <StyledText value={item.comment} />
                  <div className="buttons-wrapper">
                    <CustomBtn onClick={offEdting}>취소</CustomBtn>
                    <CustomBtn2>댓글 수정</CustomBtn2>
                  </div>
                </PostCommentsWriteBlock>
              </>
            ) : (
              <CommentConent>
                <p>{item.comment}</p>
              </CommentConent>
            )}

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

// 수정시 생기는 이벤트용
const PostCommentsWriteBlock = styled.div`
  > .buttons-wrapper {
    display: flex;
    justify-content: flex-end;
  }
`;
const StyledText = styled.textarea`
  resize: none;
  padding: 1rem;
  padding-bottom: 1.5rem;
  outline: none;
  border: 1px solid #f1f3f5;
  margin-bottom: 1.5rem;
  width: 100%;
  border-radius: 4px;
  min-height: 6.125rem;
  font-size: 1rem;
  color: #212529;
  &::placeholder {
    color: #868e96;
  }
  line-height: 1.75;
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
  background: #ffffff;
`;

const CustomBtn = styled.button`
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  border: none;
  background: none;
  color: #12b886;
  border-radius: 4px;
  padding: 0px 1.25rem;
  height: 2rem;
  font-size: 1rem;
`;
const CustomBtn2 = styled.button`
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  border: none;
  background: #12b886;
  color: #ffffff;
  border-radius: 4px;
  padding: 0px 1.25rem;
  height: 2rem;
  font-size: 1rem;
  &:disabled {
    cursor: no-drop;
  }
`;

export default CommentList;
