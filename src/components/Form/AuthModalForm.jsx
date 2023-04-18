import React from "react";
import styled from "styled-components";
import { Button, Checkbox, Form, Input } from "antd";

function AuthModallForm() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <AuthFormBlock>
      <div className="upper-wrapper">
        <h2 data-testid="title">로그인</h2>
        <section>
          <h4></h4>
          <Form
            layout="vertical"
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="ID"
              name="username"
              rules={[
                {
                  required: true,
                  message: "ID를 입력해주세요",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "PASSWORD를 입력해주세요",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                로그인
              </Button>
            </Form.Item>
          </Form>
        </section>
      </div>
      <div className="foot">
        <span>아직 회원이 아니신가요?</span>
        <div className="link" data-testid="switchmode">
          회원가입
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
