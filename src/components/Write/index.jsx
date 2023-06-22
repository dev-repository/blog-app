import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import TuiEditor from "./Toast.jsx";
import styled from "styled-components";
import { useNavigate } from "react-router";
import moment from "moment";
import { generateUUID } from "../../utils/utils";

function WriteForm2() {
  //뒤로가기
  const back = useNavigate();
  const goBack = () => {
    back(-1);
  };

  //저장 후 홈 화면으로 이동
  const home = useNavigate();
  const goHome = () => {
    home("/");
  };

  //저장시 날짜 저장용
  const saveDate = moment().format("YYYY년 MM월 DD일");

  //로그인정보 가져오기
  const writer = JSON.parse(localStorage.getItem("session") || "[]");

  //WriteForm 데이터
  const postData = localStorage.getItem("writeForm") || "[]";
  const oldPostData = JSON.parse(postData);

  //저장 할 데이터
  const [postInfo, setPostInfo] = useState({
    title: "",
    content: "",
  });

  //foce?
  const titleValue = useRef();

  //useParams
  //app.js "write2/:id" 값이랑 똑같아야 결과값이 나옴.
  const { id } = useParams();

  const postValue = (e) => {
    setPostInfo({
      ...postInfo,
      content: e,
    });
  };

  const postTitleValue = (e) => {
    setPostInfo({
      ...postInfo,
      [e.target.name]: e.target.value,
    });
  };

  const savePost = () => {
    //제목이 2글자보다 적으면 focus를 취한다
    if (postInfo.title.length < 2) {
      titleValue.current.focus();
      return;
    }
    //랜덤한 Post id 생성
    const postId = generateUUID();

    //Url이 있을경우는 수정, 있을땐 저장
    if (id) {
      localStorage.setItem(
        "writeForm",
        JSON.stringify(
          [...oldPostData].map((item) => {
            if (item.id === postId) {
              return {
                ...item,
                ...postInfo,
                date: saveDate,
                writer: writer.userId,
              };
            }
          })
        )
      );
    } else {
      localStorage.setItem(
        "writeForm",
        JSON.stringify([
          ...oldPostData,
          {
            ...postInfo,
            id: postId,
            date: saveDate,
            writer: writer.userId,
          },
        ])
      );
    }

    goHome();
  };

  useEffect(() => {
    const selectPost = oldPostData.find((item) => item.id === id);
    if (selectPost) {
      setPostInfo(selectPost);
    }
    // console.log("postId 값 : " + oldPostData.find((item) => item.id));
    // console.log("id 값 =====> " + id);
  }, [id]);

  return (
    <>
      <Header
        placeholder="제목을 입력하세요"
        ref={titleValue}
        id="title"
        name="title"
        value={postInfo.title}
        onChange={postTitleValue}
      />
      <TuiEditor
        id="content"
        name="content"
        postValue={postValue}
        content={postInfo.content}
      />
      <WirteFooterBlock>
        <BackButton onClick={goBack}>
          <span>나가기</span>
        </BackButton>
        <Group>
          <StyledButton onClick={savePost}>
            {id ? "수정하기" : "저장하기"}
          </StyledButton>
        </Group>
      </WirteFooterBlock>
    </>
  );
}
const Header = styled.textarea`
  background: transparent;
  display: block;
  padding: 0;
  font-size: 2.75rem;
  @media (max-width: 767px) {
    font-size: 1.8rem;
  }
  width: 100%;
  height: 66px;
  resize: none;
  line-height: 1.5;
  outline: none;
  border: none;
  font-weight: bold;
  color: #212529;
  &::placeholder {
    color: "#868E96";
  }
`;

const WirteFooterBlock = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  height: 4rem;
  width: 100%;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Group = styled.div`
  justify-content: flex-end;
  align-items: center;
`;

const StyledButton = styled.button`
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
  color: #fff;
  border-radius: 4px;
  padding: 0px 1.125rem;
  height: 2.5rem;
  font-size: 1.125rem;
`;
const BackButton = styled.button`
  height: 2.5rem;
  padding: 0.5rem 1rem;
  align-items: center;
  background: none;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  display: flex;
  outline: none;
  color: #212529;
  &:hover,
  &:focus {
    background: rgba(0, 0, 0, 0.05);
  }
  span {
    font-size: 1.125rem;
    @media (max-width: 375px) {
      display: none;
    }
  }
`;
export default WriteForm2;
