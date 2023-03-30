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
                <h2>해당 페이지를 찾을 수 없습니다.</h2>
                <ErrorImg
                    src="/src/static/images/404.jpg"
                    alt="404 Not Found" />
                 <BackBtn icon={<ArrowLeftOutlined />} onClick={goBack}>Back</BackBtn>
            </Container>
        </>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
  h2{
        z-index: 1;
        margin-block-start: 1.33em;
        margin-block-end: 1.33em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-weight: bold;
    }
`
const ErrorImg = styled.img`
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    width: 40%;
    margin-top: 50rem;
`
const BackBtn = styled(Button)`
   

`

export default ErrorPage;