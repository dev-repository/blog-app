import React, { useState } from "react";
import styled from "styled-components";
import RegisterModal from "./RegisterModal";
import LoginModal from "./LoginModal";

function AuthModallForm({ onClose }) {
  const [modalForm, setModalForm] = useState(true);
  const modalText = modalForm ? "로그인" : "회원가입";
  const modalText2 = modalForm
    ? "아직 회원이 아니신가요?"
    : "계정이 이미 있으신가요?";

  return (
    <AuthFormBlock>
      <div className="upper-wrapper">
        <h2 data-testid="title">{modalText}</h2>
        <section>
          <h4></h4>
          {modalForm ? (
            <LoginModal onClose={onClose} />
          ) : (
            <RegisterModal onClose={onClose} />
          )}
        </section>
      </div>
      <div className="foot">
        <span>{modalText2}</span>
        <div
          className="link"
          data-testid="switchmode"
          onClick={(e) => setModalForm(!modalForm)}
        >
          {modalForm ? "회원가입" : "로그인"}
        </div>
      </div>
    </AuthFormBlock>
  );
}

const AuthFormBlock = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  line-height: 1.5;
  .upper-wrapper {
    @media (max-width: 768px) {
      margin-top: 2rem;
    }
  }
  h2,
  h4 {
    margin: 0;
  }
  h2 {
    font-size: 1.3125rem;
    color: #212529;
  }
  h4 {
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: #868e96;
  }
  section + section {
    margin-top: 2.5rem;
  }
  .foot {
    @media (max-width: 768px) {
      margin-top: 2rem;
    }

    text-align: right;
    span {
      margin-right: 0.25rem;
    }
    .link {
      display: inline-block;
      font-weight: bold;
      color: #12b886;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default AuthModallForm;
