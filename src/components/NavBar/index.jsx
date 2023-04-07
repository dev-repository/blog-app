import React from "react";
import {  Drawer, Avatar } from "antd";
import "../../NavBar.css";
import RightMenu from "./RightMenu";

function NavBar(){
  //localstorge에서 Session 정보 가져옴
  const session = localStorage.getItem("session");
  const getUserName = session ? JSON.parse(session).userName : "session"; 

  //로그아웃
  function Logout(){
    localStorage.removeItem("session");
    //로그아웃 후 재실행
    window.location.replace('http://localhost:5173'); 
  }

  function separateName(fullName) {
    const nameLength = fullName.length;
    let lastName, firstName;
  
    if (nameLength === 2) {
      lastName = fullName[0];
      firstName = fullName[1];
    } else if (nameLength === 3) {
      lastName = fullName[0];
      firstName = fullName.substr(1);
    } else if (nameLength === 4) {
      lastName = fullName[1];
      firstName = fullName.substr(2);
    } else {
      // 예외 처리: 이름의 글자 수가 2, 3, 4 중 하나가 아닌 경우
      lastName = "김";
      firstName = "테스트";
    }
  
    return { lastName, firstName };
  }
 return(
   <nav
   className="menu"
  //position: "fixed", zIndex: 5,
   style={{  width: "100%", height: "65px" }}
 >
   <div className="menu__logo">
     <a href="/">
       <img
         src="/src/static/images/logimg.png"
         alt="Logo"
       />
     </a>
   </div>
   {/* 
    test 끝
   {session ? (
    <button onClick={Logout}>
      logout
    </button>
   ): (
    <button>
      login
    </button>
   )
   }
   {getUserName ? (
        <Avatar style={{backgroundColor: '#f56a00'}}>
          {separateName(getUserName).firstName}
        </Avatar>
    ) : (
      <Avatar>
          {separateName(getUserName).firstName}
      </Avatar>
    )
   }
 
 */}
   <div className="menu__container">
      <div className="menu_rigth">
         <RightMenu mode="horizontal" />
      </div>

      <Drawer>
          <RightMenu mode="inline" />
        </Drawer>
   </div>
 </nav>
 );
};

export default NavBar;