import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import RatioImg from "./RatioImg";
import { faker } from '@faker-js/faker';
import { Icons } from "../../static/svg/Icons";


function PostCard() {
    return (

        <Block>
            <StyledLink>
                <RatioImg
                    widthRatio={1.916}
                    heightRatio={1} />
            </StyledLink>

            <Content>
                <StyledLink>
                    <h4>제목</h4>
                    <div className="description-wrapper">
                        <p>ㅇㅇㅇㅇㅇㅇㅇㅇ</p>
                    </div>
                </StyledLink>
                <div className="sub-info">
                    <span>날짜</span>
                    <span className="separator">·</span>
                    <span>개의 댓글</span>
                </div>
            </Content>
            <Footer>
                <Link className="userinfo" to={"/"}>
                    <img src={faker.image.cats()} alt="testImg" />
                    <span>
                        by <b>작성자</b>
                    </span>
                </Link>
                <div className="likes">
                    <Icons.LikeIcon />
                    좋아요 수
                </div>
            </Footer>
        </Block>
    );
};

const Block = styled.div`
    width: 20rem;
    background: var(--bg-element1);
    border-radius: 4px;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.04);
    transition: 0.25s box-shadow ease-in, 0.25s transform ease-in;
    &:hover{
        transform: translateY(-8px);
        box-shadow: 0 12px 20px 0 rgba(0, 0, 0, 0.08);
        @media(max-width: 1024){
            transition: none;
        }
    }
    margin: 1rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    @media (max-width: 1440px) {
        width: calc(25% - 2rem);
    }
    @media (max-width: 1312px) {
        width: calc(33% - 1.8125rem);
    }

    @media (max-width: 1056px) {
        width: calc(50% - 2rem);
    }

    @media (max-width: 768px) {
      margin: 0;
      width: 100%;
      & + & {
      margin-top: 1rem;
     }
    }
`
const StyledLink = styled.div`
    display: block;
    color: inherit;
    text-decoration: none;
`
const Content = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    h4{
        font-size: 1rem;
        margin: 0px 0px 0.25rem;
        line-height: 1.5;
        word-break: break-word;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        color: #212529;
        @media (max-width: 768px) {
            white-space: initial;
        }
    }
    .description-wrapper {
    flex: 1;
  }
  p{
    margin: 0;
    word-break: break-word;
    overflow-wrap: break-word;
    font-size: 0.875rem;
    line-height: 1.5;
    height: 3.9375rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #495057;
    margin-bottom: 1.5rem;
  }
  .sub-info {
    font-size: 0.75rem;
    line-height: 1.5;
    color: #898E96;
    .separator {
      margin-left: 0.25rem;
      margin-right: 0.25rem;
    }
  }

  h4 {
    display: block;
    margin-block-start: 1.33em;
    margin-block-end: 1.33em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
`
const Footer = styled.div`
    padding: 0.625rem 1rem;
    border-top: 1px solid #F1F3F5;
    display: flex;
    font-size: 0.75rem;
    line-height: 1.5;
    justify-content: space-between;
    .userinfo{
        text-decoration: none;
        color: inherit;
        display: flex;
        align-items: center;
        img{
            object-fit: cover;
            border-radius: 50%;
            width: 1.5rem;
            height: 1.5rem;
            display: block;
            margin-right: 0.5rem;
        }
        span{
            color: #898E96;
            b{
                color: #212529;
            }
        }
    }
    .likes {
        display: flex;
        align-items: center;
        svg{
            width: 0.75rem;
            height: 0.75rem;
            margin-right: 0.5rem;
        }
    }
`

export default PostCard;