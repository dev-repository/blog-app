import React from "react";
import { Button, Form, Input } from "antd";

function LoginModal({ onClose }) {
  const onFinish = (values) => {
    console.log("Success:", values);
    //Local Storage에서 회원가입한 정보를 가져옴
    const newUserInfo = localStorage.getItem("users") || "[]";
    const oldUserInfo = JSON.parse(newUserInfo);

    //user라는 변수는 예전users데이터에서 아이디 같은거 패스워드 같은걸 찾는다
    const user = oldUserInfo.find(
      (user) =>
        user.userId === values.userId && user.password === values.password
    );
    //위 조건이 다 맞으면 session을생성하고 조건에 맞았던 데이터를 json.stringify에 넣음
    if (user) {
      localStorage.setItem("session", JSON.stringify(user));
      onClose();
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    alert("아이디 혹은 비밀번호를 확인해주세요!");
  };

  return (
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
        label="아이디"
        name="userId"
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
        label="비밀번호"
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
  );
}

export default LoginModal;
