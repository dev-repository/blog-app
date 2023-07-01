import React, { useState, useCallback } from "react";
import styled from "styled-components";
import DetailResponsive from "./DetailResponsive";
import moment from "moment";
import { generateUUID } from "../../../utils/utils";
import { useParams } from "react-router-dom";
import CommentList from "./CommentList";

function Comments() {
  //id 저장용, 항상 맨위에 있어함
  const { id } = useParams();

  //로그인정보 가져오기
  const sessoin = JSON.parse(localStorage.getItem("session") || "[]");

  //댓글 정보가져오기
  const comen = JSON.parse(localStorage.getItem("comments") || "[]");
  //댓글정보와 게시물 아이디가 똑같은 것만 가져옴
  const coments = comen.filter((i) => i.postId === id);

  //뎃글 날짜 현제시간으로 저장하려고
  const commentDate = moment().format("YYYY년 MM월 DD일");

  //댓글 저장 할 데이터
  const [comment, setComment] = useState("");

  //뎃글 벨리데이션 체크
  const [checkComment, setCheckComment] = useState(false);

  //뎃글 저장용 ID
  const commentId = generateUUID();

  const onComment = useCallback((e) => {
    const iptComment = e.target.value;
    setComment(iptComment);

    if (!iptComment) {
      setCheckComment(false);
    }

    if (iptComment.length < 1) {
      setCheckComment(false);
    } else {
      setCheckComment(true);
    }
  }, []);

  //댓글저장
  const saveComment = () => {
    localStorage.setItem(
      "comments",
      JSON.stringify([
        ...comen,
        {
          id: commentId,
          comment: comment,
          postId: id,
          commentDate: commentDate,
          userId: sessoin.userId,
        },
      ])
    );
    window.location.reload();
  };

  return (
    <>
      <PostCommentsBlock>
        <h4>{coments.length}개의 댓글</h4>

        {sessoin.userId ? (
          <>
            <PostCommentsWriteBlock>
              <StyledText
                placeholder="댓글을 작성하세요"
                onChange={onComment}
                value={comment}
              />
              <div className="buttons-wrapper">
                <CustomBtn disabled={!checkComment} onClick={saveComment}>
                  댓글 작성
                </CustomBtn>
              </div>
            </PostCommentsWriteBlock>
          </>
        ) : null}
        <Area>
          <div></div>
        </Area>

        {/* 리스트 */}
        <CommentList />
      </PostCommentsBlock>
    </>
  );
}

const PostCommentsBlock = styled(DetailResponsive)`
  margin-top: 3rem;
  color: #212529;
  h4 {
    font-size: 1.125rem;
    line-height: 1.5;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  @media (max-width: 768px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
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

const Area = styled.div`
  margin-top: 2.5rem;
`;
export default Comments;
