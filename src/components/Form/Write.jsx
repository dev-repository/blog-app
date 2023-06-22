import React, { useState, useRef, useEffect } from "react";
import { Button, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import styled from "styled-components";
import { generateUUID } from "../../utils/utils";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const WriteForm = () => {
  const authorInput = useRef();
  const contentInput = useRef();
  const dateInput = useRef();
  const loginWriter = JSON.parse(localStorage.getItem("session") || "[]");
  const [writeForm, setWriteForm] = useState({
    title: "",
    content: "",
    date: null,
    writer: loginWriter.userId,
  }); //title과 date를 가지는 writeForm state생성

  const [data, setData] = useState(null); //수정state 생성
  const homeNavi = useNavigate();
  const navHome = () => {
    homeNavi("/");
  };

  const editHandleWrite = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleWrite = (e) => {
    setWriteForm({
      ...writeForm,
      [e.target.name]: e.target.value,
    });
  };

  const editHandleSubmit = (e) => {
    e.preventDefault();
    const items = localStorage.getItem("writeForm");
    const old_write = JSON.parse(items);
    localStorage.setItem(
      "writeForm",
      JSON.stringify(
        [...old_write].map((item) => {
          if (item.id === id) {
            return {
              ...item,
              title: data.title,
              content: data.content,
              date: data.date,
            };
          }
          return item;
        })
      )
    );
    navHome();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (writeForm.title.length < 3) {
      //제목이 3글자보다 적으면 focus를 취한다
      authorInput.current.focus();
      return;
    }
    if (writeForm.content.length < 5) {
      contentInput.current.focus();
      return;
    }
    if (writeForm.date === null) {
      dateInput.current.focus();
      return;
    }
    const id = generateUUID();
    const userWrite = localStorage.getItem("writeForm") || "[]";
    const old_write = JSON.parse(userWrite);
    localStorage.setItem(
      "writeForm",
      JSON.stringify([
        ...old_write,
        {
          ...writeForm,
          id: id,
        },
      ])
    );

    navHome();
  };

  const { id } = useParams();

  useEffect(() => {
    const WriteList = JSON.parse(localStorage.getItem("writeForm") || "[]");
    const selectNumber = WriteList.find((item) => item.id === id);
    setData(selectNumber);
  }, [id]);

  return (
    <WriteBox>
      {data ? (
        <>
          <form onSubmit={editHandleSubmit}>
            <label htmlFor="title">글 제목</label>
            <Input
              ref={authorInput}
              id="title"
              type="text"
              name="title"
              placeholder="글제목"
              value={data.title}
              onChange={editHandleWrite}
            />
            <label htmlFor="content">글 내용</label>
            <TextArea
              ref={contentInput}
              id="content"
              name="content"
              rows={4}
              placeholder="maxLength is 6"
              maxLength={100}
              value={data.content}
              onChange={editHandleWrite}
            />
            <label htmlFor="date">글 작성일자</label>
            <Input
              ref={dateInput}
              id="date"
              type="date"
              name="date"
              value={data.date}
              onChange={editHandleWrite}
            />
            <label htmlFor="writer">작성자 명</label>
            <Input
              id="writer"
              type="text"
              name="writer"
              value={loginWriter.userId}
              onChange={editHandleWrite}
              disabled
            />
          </form>
          <Button onClick={editHandleSubmit}>글 등록</Button>
        </>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">글 제목</label>
            <Input
              ref={authorInput}
              id="title"
              type="text"
              name="title"
              placeholder="글제목"
              onChange={handleWrite}
            />
            <label htmlFor="content">글 내용</label>
            <TextArea
              ref={contentInput}
              id="content"
              name="content"
              rows={4}
              placeholder="maxLength is 6"
              maxLength={100}
              onChange={handleWrite}
            />
            <label htmlFor="date">글 작성일자</label>
            <Input
              ref={dateInput}
              id="date"
              type="date"
              name="date"
              onChange={handleWrite}
            />
            <label htmlFor="writer">작성자 명</label>
            <Input
              id="writer"
              type="text"
              name="writer"
              value={loginWriter.userId}
              onChange={handleWrite}
              disabled
            />
          </form>
          <Button onClick={handleSubmit}>글 등록</Button>
        </>
      )}
      {/* <WriteComment writeForm={writeForm} /> */}
    </WriteBox>
  );
};

export default WriteForm;

const WriteBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1000px;
  height: 700px;
  background: #f1f1f1;
  padding: 50px;
  border-radius: 50px;
  label {
    font-weight: bold;
  }
  Input,
  Textarea {
    margin-bottom: 20px;
  }
  Button {
    float: right;
  }
`;
