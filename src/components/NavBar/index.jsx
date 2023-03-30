import React from "react";
import {  Drawer } from "antd";
import "../../NavBar.css";
import RightMenu from "./RightMenu";

function NavBar(){
 return(
   <nav
   className="menu"
  //position: "fixed", zIndex: 5,
   style={{  width: "100%" }}
 >
   <div className="menu__logo">
     <a href="/">
       <img
         src="/src/static/images/logimg.png"
         alt="Logo"
       />
     </a>
   </div>

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