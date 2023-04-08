import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

function HeaderLogo(){
    return(
        <HeaderLogoBlack>
            <Link to ="/">
                <img className="logo"
                    src="/src/static/images/logimg.png"
                    alt="Logo"/>
            </Link>
        </HeaderLogoBlack>
    );
};

const HeaderLogoBlack = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media (max-width: 1024px) {
        .logo{
            height: 2.25rem;
        }
    }
    a{
        display: flex;
        align-items: center;
        color: inherit;
        text-decoration: none;
    }
    img{
        width: 86px;
    }
`


export default HeaderLogo;