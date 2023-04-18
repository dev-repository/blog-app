import React, { Children } from "react";
import styled, { css } from "styled-components";
import { MdClose } from "react-icons/md";
import transitions from "../../styles/transitions";

function AuthModal(props){
    const visible = true;
    
    return(
        <AuthModalBlock visible={visible}>
            <div className="wrapper">
                <div className="gray-block">
                    <div>
                        <img src="https://static.velog.io/static/media/undraw_joyride_hnno.fae6b95e.svg" alt="welcome"/>
                        <div className="welcome">환영합니다!</div>
                    </div>
                </div>
                <div className="white-block">
                    <div className="exit-wrapper">
                        <MdClose bIndex={1}/>
                    </div>
                    <div className="block-content">{props.children}</div>
                </div>
            </div>
        </AuthModalBlock>
    )
};

const AuthModalBlock = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
    .wrapper {
        width: 606px;
        height: 530px;
        @media (max-width: 768px) {
            flex: 1;
            width: auto;
            height: 100%;
        }
        ${(props) =>
      props.visible
        ? css`
            animation: ${transitions.popInFromBottom} 0.4s forwards ease-in-out;
          `
        : css`
            animation: ${transitions.popOutToBottom} 0.2s forwards ease-in-out;
          `}

    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.09);
    display: flex;
    .gray-block {
        @media (max-width: 768px) {
            display: none;
        }
      width: 216px;
      background: #F8F9FA;
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 100%;
        height: auto;
        display: block;
      }
      .welcome {
        font-size: 1.75rem;
        margin-top: 1.5rem;
        color: #495057;
        text-align: center;
        font-weight: 600;
      }
    }
    .white-block {
      flex: 1;
      background: #FFFFFF;
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      @media (max-width: 768px) {
        overflow-y: auto;
      }
      .exit-wrapper {
        display: flex;
        justify-content: flex-end;
        font-size: 1.5rem;
        color: #868E96;
        margin-bottom: 2.25rem;
        svg {
          cursor: pointer;
        }
        @media (max-width: 768px) {
          margin-bottom: 0;
        }
      }
      .block-content {
        flex: 1;
        display: flex;
        flex-direction: column;
      }
    }
    
      }

`


export default AuthModal;