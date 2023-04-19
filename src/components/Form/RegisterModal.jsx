import React from "react";
import { Button, Form, Input } from "antd";

function RegisterModal() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
        label="이름"
        name="username"
        rules={[
          {
            required: true,
            message: "이름을 입력해주세요",
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
        label="비밀번호 확인"
        name="configPassword"
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
          회원가입
        </Button>
      </Form.Item>
    </Form>
  );
}

export default RegisterModal;
