import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router";
import NavBar from "../NavBar";

function ErrorPage() {
  //뒤로가기 , 예전에는 useHistory였다고함.
  const back = useNavigate();
  const goBack = () => {
    back(-1);
  };
  const [session, setState] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const jsonString = localStorage.getItem("session");
    if (jsonString) {
      setState(JSON.parse(jsonString));
    }
  }, [location]);

  //?. null 도 type 체크 includes
  if (session?.userType === "회원" && ["/admin"].includes(pathname)) {
    return (
      <>
        <NavBar />
        <Container>
          <img src="/imgs/401.png" alt="404 Not Found" />
          <div className="message">{session.userName}님은 권한이 없습니다.</div>

          <div className="btnWrapper" onClick={goBack}>
            <button className="btnCss">뒤로가기</button>
          </div>
        </Container>
      </>
    );
  }

  return (
    <>
      <NavBar />
      <Container>
        <img
          src="https://static.velog.io/static/media/undraw_page_not_found_su7k.7e3de5e9.svg"
          alt="404 Not Found"
        />
        <div className="message">해당 페이지를 찾을 수 없습니다.</div>

        <div className="btnWrapper" onClick={goBack}>
          <button className="btnCss">뒤로가기</button>
        </div>

        {/* <BackBtn icon={<ArrowLeftOutlined />} onClick={goBack}>Back</BackBtn> */}
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  flex-direction: column;

  img {
    width: 20rem;
    height: auto;

    @media (max-width: 768px) {
      width: 12rem;
    }
  }

  .message {
    padding-left: 1rem;
    padding-right: 1rem;
    white-space: pre;
    text-align: center;
    line-height: 1.5;
    font-size: 2.5rem;
    color: var(--text1);
    margin-top: 2rem;

    @media (max-width: 768px) {
      font-size: 1.5rem;
      margin-top: 1rem;
    }
  }

  .btnWrapper {
    margin-top: 2rem;
  }
  .btnCss {
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
  }
`;

export default ErrorPage;
