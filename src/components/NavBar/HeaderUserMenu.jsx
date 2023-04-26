import React from "react";
import styled from "styled-components";
import OutsideClickHandler from "react-outside-click-handler";
import HeaderUserMenuItem from "./HeaderUserMenuItem";

function HeaderUserMenu(visible) {
  //session user정보 빼오기
  const session = localStorage.getItem("session") || "[]";
  const userInfo = JSON.parse(session);
  console.log(userInfo.userName);
  console.log(userInfo.userType);

  //로그아웃
  function Logout() {
    localStorage.removeItem("session");
    //로그아웃 후 재실행
    window.location.reload("http://localhost:5173");
  }
  if (!visible) return null;

  return (
    <OutsideClickHandler onOutsideClick={onclose}>
      <HeaderUserMenuBlock onClick={onclose}>
        <div className="menu-wrapper">
          <HeaderUserMenuItem>{userInfo.userName}님 하이!</HeaderUserMenuItem>
          {userInfo.userType === "관리자" ? (
            <HeaderUserMenuItem to="/admin">관리자 페이지</HeaderUserMenuItem>
          ) : null}
          <div className="mobile-only">
            <HeaderUserMenuItem to="/write">새 글 작성</HeaderUserMenuItem>
          </div>
          <HeaderUserMenuItem onClick={Logout}>로그아웃</HeaderUserMenuItem>
        </div>
      </HeaderUserMenuBlock>
    </OutsideClickHandler>
  );
}

const HeaderUserMenuBlock = styled.div`
  position: absolute;
  top: 100%;
  margin-top: 1rem;
  right: 0;
  > .menu-wrapper {
    position: relative;
    z-index: 5;
    width: 12rem;
    background: #ffffff;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);

    .mobile-only {
      display: none;
      @media (max-width: 1024px) {
        display: block;
      }
    }
  }
`;

export default HeaderUserMenu;
