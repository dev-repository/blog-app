import styled from 'styled-components';

export const BackForm = styled.div`
width: 500px;
height: 500px;
background: #f8f9fa;
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
padding: 30px;
border-radius: 30px;
    input{
        margin: 15px 0;
    }
    .LoginBtn{
        display: flex;
        justify-content: center;
        button{
            margin: 0 10px;
        }
    }
`;