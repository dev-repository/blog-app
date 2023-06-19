import React from "react";
import TuiEditor from "./Toast.jsx";
import styled from "styled-components";
import { useNavigate } from "react-router";

function WriteForm2() {
  const back = useNavigate();
  const goBack = () => {
    back(-1);
  };
  return (
    <>
      <Header placeholder="제목을 입력하세요" />
      <TuiEditor />
      <WirteFooterBlock>
        <BackButton onClick={goBack}>
          <span>나가기</span>
        </BackButton>
        <Group>
          <StyledButton>저장하기</StyledButton>
        </Group>
      </WirteFooterBlock>
    </>
  );
}
const Header = styled.textarea`
  background: transparent;
  display: block;
  padding: 0;
  font-size: 2.75rem;
  @media (max-width: 767px) {
    font-size: 1.8rem;
  }
  width: 100%;
  height: 66px;
  resize: none;
  line-height: 1.5;
  outline: none;
  border: none;
  font-weight: bold;
  color: #212529;
  &::placeholder {
    color: "#868E96";
  }
`;

const WirteFooterBlock = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  height: 4rem;
  width: 100%;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Group = styled.div`
  justify-content: flex-end;
  align-items: center;
`;

const StyledButton = styled.button`
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  border: none;
  background: #12b886;
  color: #fff;
  border-radius: 4px;
  padding: 0px 1.125rem;
  height: 2.5rem;
  font-size: 1.125rem;
`;
const BackButton = styled.button`
  height: 2.5rem;
  padding: 0.5rem 1rem;
  align-items: center;
  background: none;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  display: flex;
  outline: none;
  color: #212529;
  &:hover,
  &:focus {
    background: rgba(0, 0, 0, 0.05);
  }
  span {
    font-size: 1.125rem;
    @media (max-width: 375px) {
      display: none;
    }
  }
`;

export default WriteForm2;
