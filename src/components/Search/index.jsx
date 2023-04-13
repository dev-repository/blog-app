import React from "react";
import styled, { css } from 'styled-components';
import { Icons } from "../../static/svg/Icons";
import NavBar from "../NavBar";
import FlatPostCardList from "./FlatPostCardList";


function SearchForm(){
    return(
        <>
            <NavBar />
            <Mt/>
                <SearchLine>
                    <SearchBlock>
                        <Icons.SearchIcon/>
                        <input 
                            placeholder="검색어를 입력하세요"
                            type="text" />
                    </SearchBlock>

                    <Info>
                        
                        총 <b> 개</b>의 포스트를 찾았습니다.
                    </Info>

                    <FlatPostCardList />
                </SearchLine>
        </>
    );
};
const Mt = styled.div`
    margin-top: 30px;
    opacity: 0;
`
const SearchLine = styled.div`
    width: 768px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1.5rem;

    @media(max-width: 767px){
        width: 468px;
        margin-bottom: 1.5rem;
    }
`

const SearchBlock = styled.div`
    display: flex;
    height: 4rem;
    border: 1px solid #ADB5BD;
    padding: 0 1.5rem;
    padding-left: 0.625rem;
    padding-right: 0.625rem;
    align-items: center;
    transition: all 0.125s ease-in;
    cursor: text;

    svg{
        transition: all 0.125s ease-in;
        width: 1.5rem;
        height: 1.5rem;
        margin-right: 1.25rem;
        fill: rgb(173, 181, 189);
        flex-shrink: 0;
    }

    input{
        transition: all 0.125s ease-in;
        font-size: 0.875rem;
        flex: 1;
        display: block;
        line-height: 1rem;
        height: 1rem;
        padding: 0;
        border: none;
        outline: 0;
        background: transparent;
        color: #495057;
        min-width: 0;
        font-size: 1.5rem;
        line-height: 2rem;
        height: 2rem;
        &::placeholder{
            color: #868E96;
        }
    }   

    @media(max-width: 767px){
            height: 2.25rem;
            padding-left: 1rem;
            padding-right: 1rem;
            svg {
                width: 1rem;
                height: 1rem;
                margin-right: 0.75rem;
            }
            input {
                flex: 1;
                font-size: 1.125rem;
                line-height: 1.5;
                height: auto;
            }
        }
`

const Info = styled.p`
    margin-bottom: 4rem;
    font-size: 1.125rem;
    line-height: 1.5;
    @media (max-width: 768px) {
        font-size: 1rem;
        margin-bottom: 1rem;
    }
    color: #495057;
    b {
        color: #212529;
    }
`

export default SearchForm;