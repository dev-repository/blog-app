import React, { Children } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

function HeaderUserMenuItem({onClick, children, to}) {
    const jsx = (
        <HeaderUserMenuItemBlock onClick={onClick}>
            {children}
        </HeaderUserMenuItemBlock>
    );
    return to ? (
        <WrapperLink to={to} style={{ display: 'block' }}>
            {jsx}
        </WrapperLink>
    ) : (
        jsx
    );
};

const HeaderUserMenuItemBlock = styled.div`
    color: #212529;
    padding: 0.75rem 1rem;
    line-height: 1.5;
    font-weight: 500;
    cursor: pointer;
    &:hover{
        background: #F8F9FA;
        color: #343A40;
    }
`;

const WrapperLink = styled(Link)`
    display: block;
    color: inherit;
    text-decoration: none;
`

export default HeaderUserMenuItem;