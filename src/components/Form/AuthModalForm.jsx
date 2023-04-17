import React from "react";
import styled from "styled-components";

function AuthModallForm(){
    return(
        <AuthFormBlock>
            <div className="upper-wrapper">
                <h2 data-testid="title">로그인</h2>
                <section>
                    <h4>이메일로 로그인</h4>
                    <input type="text" />
                </section>
            </div>
            <div className="foot">
                <span>
                    아직 회원이 아니신가요?
                </span>
                <div className="link"
                  data-testid="switchmode">
                    회원가입
                </div>
            </div>
        </AuthFormBlock>
    )
};

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
    color: #868E96;
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
      color: #12B886;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;


export default AuthModallForm;
