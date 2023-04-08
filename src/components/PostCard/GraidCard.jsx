import React from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import PostCard from "./PostCard";
import NavBar from "../NavBar";

function GraidCard() {
    return (
        <>
            <NavBar />

            <MarginRL>
                <FlexMT>
                    <MainFlex>
                        <GridCard>
                            <PostCard />
                        </GridCard>
                    </MainFlex>
                </FlexMT>
            </MarginRL>

        </>
    );
};


const MarginRL = styled.div`
    width: 1728px;
    margin-left: auto;
    margin-right: auto;
    
    @media (max-width: 1056px) {
        width: calc(100% - 2rem);
    }
    /* @media (max-width: 1440px) {
        width: 1024px;
    } */
    /* @media (max-width: 1919px) {
        width: 1376px;
    } */
`;
const FlexMT = styled.div`
    display: flex;
    margin-top: 2rem;
`;

const MainFlex = styled.main`
    flex: 1 1 0%;
`;

const GridCard = styled.div`
    display: flex;
    margin: -1rem;
    justify-content: flex-start;
    flex-wrap: wrap;
    
    @media(max-width:767px) {
        margin: 0;
    }
`;

export default GraidCard;