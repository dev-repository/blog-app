import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { Button } from "antd";
import { ArrowLeftOutlined } from '@ant-design/icons';
import NavBar from "../NavBar";

function ErrorPage(){
    //뒤로가기 , 예전에는 useHistory였다고함.
    const back = useNavigate();
    const goBack = () =>{
        back(-1);
    } 
    
    return(
        <>
        <NavBar/>
            <Container>
            <img
                    src="https://static.velog.io/static/media/undraw_page_not_found_su7k.7e3de5e9.svg"
                    alt="404 Not Found" />
                <div className="message">해당 페이지를 찾을 수 없습니다.</div>


                <div className="btnWrapper" onClick={goBack}>
                    <button className="btnCss">
                        뒤로가기
                    </button>
                </div>
        
                 {/* <BackBtn icon={<ArrowLeftOutlined />} onClick={goBack}>Back</BackBtn> */}
            </Container>
        </>
    );
};

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: column;

    img{
        width: 20rem;
        height: auto;
       
        @media (max-width: 768px) {
        width: 12rem;
        }
    }

    .message{
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

    .btnWrapper{
        margin-top: 2rem;
    }
    .btnCss{
        display: inline-flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        font-weight: bold;
        cursor: pointer;
        outline: none;
        border: none;
        background: #12B886;
        color: #FFF;
        border-radius: 4px;
        padding: 0px 1.125rem;
        height: 2.5rem;
        font-size: 1.125rem; 
    }
`


export default ErrorPage;