import React,{ useRef, useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import HeaderLogo from "./HeaderLogo";
import { Icons } from "../../static/svg/Icons";
import ToggleIcon from "./ToggleIcon";
import HeaderUserIcon from "./HeaderUserIcon";
import HeaderUserMenu from "./HeaderUserMenu";
import AuthModal from "../Form/AuthModal";
import AuthModallForm from "../Form/AuthModalForm";

function NavBar(){
    //login
    const loginForm = useNavigate();
    const useLogin = () => {
        loginForm('/login');
    }
    //write
    const writeForm = useNavigate();
    const useWrite = () => {
        writeForm('/write');
    }

    //localstorge에서 Session 정보 가져옴
    const session = localStorage.getItem("session");

    const [userMenu, toggleUserMenu] = useState(false);

    const ref = useRef(null);

    //userToggle Menu
    const onOutsideClick = useCallback(
      (e) =>{
        if(!ref.current) return;
        if(!ref.current.contains(e.target)) return;
        toggleUserMenu();
      }
      ,[toggleUserMenu]  
    );

    return(
        <Block>
            <Inner>
                <HeaderLogo />
                {session ? (
                <Right>
                    <ToggleIcon />
                    <SearchButton to={"/search"}>
                        <Icons.SearchIcon />
                    </SearchButton>
                    
                    <RoundButton2 className="writeBtn"
                        style={{ marginRight: '1.25rem' }} 
                        onClick={useWrite} >
                        새 글 작성
                    </RoundButton2>

                    <div ref={ref}>
                        <HeaderUserIcon onClick={() => toggleUserMenu(!userMenu)}/>
                    </div>

                    {userMenu ? (
                        <HeaderUserMenu 
                            onClose={onOutsideClick}
                        />    
                    ) : (
                        null
                    )}
                
                </Right> 
                ):(
                <Right>
                    <ToggleIcon />
                    <SearchButton to={"/search"}>
                        <Icons.SearchIcon />
                    </SearchButton>
                    
                    <RoundButton onClick={useLogin}>
                        로그인
                    </RoundButton>
                    <AuthModal>
                        <AuthModallForm />
                    </AuthModal>
                </Right> 
                )}
                
            </Inner>
        </Block>
    );
};

const Block = styled.div`
    height: 4rem;
    border-bottom: solid 1px #e8e8e8;
    box-shadow: 0 0 30px #f3f1f1;
    background-color: white;
`
const Inner = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1728px;
    margin-left: auto;
    margin-right: auto;
    
    @media (max-width: 1919px) {
        width: 1376px;
    }
    @media (max-width: 1440px) {
        width: 1024px;
    }
    @media (max-width: 1056px) {
        width: calc(100% - 2rem);
    }
`
const Right = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    .writeBtn{
        @media (max-width: 1024px) {
            display: none;
        }
    }
`
const SearchButton = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    width: 2.5rem;
    height: 2.5rem;
    outline: none;
    border-radius: 50%;
    color: #212529;
    cursor: pointer;
    &:hover{
        background-color: rgba(0,0,0,0.05);
    }
    svg{
        width: 1.125rem;
        height: 1.125rem;
    }
    margin-right: 0.5rem;
`
const RoundButton = styled.button`
    height: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1rem;
    border-radius: 1rem;
    border: none;
    outline: none;
    font-weight: bold;
    word-break: keep-all;
    background: #212529;
    color: #FFF;
    transition: all 0.125s ease-in 0s;
    cursor: pointer;
    
    &:focus{
        box-shadow: rgba(0, 0, 0, 0.19) 0px 2px 12px;
    }
    &:hover{
        background: #343A40
    }
`
const RoundButton2 = styled.button`
height: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1rem;
    border-radius: 1rem;
    outline: none;
    font-weight: bold;
    word-break: keep-all;
    background: #F8F9FA;
    border: 1px solid #212529;
    color: #212529;
    transition: all 0.125s ease-in 0s;
    cursor: pointer;
    &:focus{
        box-shadow: rgba(0, 0, 0, 0.19) 0px 2px 12px;
    }
    &:hover{
        background: #212529;
        color: #FFFFFF;
    }
`

export default NavBar;