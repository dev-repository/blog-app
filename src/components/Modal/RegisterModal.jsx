import React, { useState, useCallback } from "react";
import { Button, Form, Input, Radio } from "antd";

function RegisterModal({ setModalForm }) {
  //localstorage에서 유저정보 가져옴.
  const users = localStorage.getItem("users") || "[]";
  //예전 users를 json.parse로 넣어주는 변수 생성
  const oldUsers = JSON.parse(users);

  //이름, 아이디, 비밀번호, 비밀번호 확인
  const [userName, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPw, setConfirmPw] = useState("");

  //관리자 설정
  const userTypes = ["관리자", "회원"];
  const [userType, setUserType] = useState("회원");
  const onChangeUserType = ({ target: { value } }) => {
    setUserType(value);
  };

  //오류메세지 저장
  const [nameMessage, setNameMessage] = useState("");
  const [idMessage, setIdMessage] = useState("");
  const [pwMessage, setPwMessage] = useState("");
  const [conPwMessage, setConPwMessage] = useState("");

  //유효성 검사
  const [checkName, setCheckName] = useState(false);
  const [checkId, setCheckId] = useState(false);
  const [checkPw, setCheckPw] = useState(false);
  const [checkConPw, setCheckConPw] = useState(false);

  //useCallBack 함수 사용하는 이유: 메모리 최적화를 하기 위해서
  //이름
  const onChangeName = useCallback((e) => {
    const inputId = e.target.value;
    setUsername(inputId);

    if (!inputId) {
      setNameMessage("");
      setCheckName(false);
      return;
    }

    if (e.target.value.length < 2 || e.target.value.length > 5) {
      setNameMessage("2글자 이상 5글자 미만으로 입력해주세요!");
      setCheckName(false);
    } else {
      setNameMessage("올바른 이름 입니다.");
      setCheckName(true);
    }
  }, []);

  //id
  const onChangeId = useCallback(
    (e) => {
      const idRegex = /^[a-zA-Z0-9]{5,15}$/; // 영문 대소문자와 숫자, 5~15자리
      const idCurrent = e.target.value;
      //중복체크
      //some() 함수 일치하는것만 true false
      const inUsed = oldUsers.some((i) => i.userId === idCurrent);
      setUserId(idCurrent);

      if (!idCurrent) {
        setIdMessage("");
        setCheckId(false);
        return;
      }

      if (!idRegex.test(idRegex)) {
        setIdMessage("아이디 형식이 잘 못 되었습니다.");
        setCheckId(false);
      } else {
        setIdMessage("사용이 가능합니다.");
        setCheckId(true);
      }

      if (inUsed) {
        setIdMessage("사용중인 아이디입니다.");
        setCheckId(false);
      } else {
        setIdMessage("사용이 가능합니다.");
        setCheckId(true);
      }
    },
    [userId, oldUsers]
  );

  //비밀번호
  const onChangePw = useCallback((e) => {
    const pwRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/; // 영문 대소문자와 숫자, 8자리 이상
    const pwCurrent = e.target.value;
    setPassword(pwCurrent);

    if (!pwCurrent) {
      setPwMessage("");
      setCheckPw(false);
      return;
    }

    if (!pwRegex.test(pwCurrent)) {
      setPwMessage("영문 대소문자와 숫자, 8자리 이상으로 조합해주세요!");
      setCheckPw(false);
    } else {
      setPwMessage("안전한 비밀번호 입니다.");
      setCheckPw(true);
    }
  }, []);

  //비밀번호 확인
  const onCheckPw = useCallback(
    (e) => {
      const checkPw = e.target.value;
      setConfirmPw(checkPw);

      if (!checkPw) {
        setConPwMessage("");
        setCheckConPw(false);
        return;
      }

      if (password === checkPw) {
        setConPwMessage("비밀번호와 일치 합니다.");
        setCheckConPw(true);
      } else {
        setConPwMessage("비밀번호와 불일치 합니다.");
        setCheckConPw(false);
      }
    },
    [password]
  );

  const onFinish = (values) => {
    console.log("Success:", values);
    const userInpo = {
      userName,
      userId,
      password,
      userType,
    };
    //새로운 배열을 저장 예전 변수를 먼저 넣고 users에 새로운데이터를 넣음
    localStorage.setItem("users", JSON.stringify([...oldUsers, userInpo]));
    alert("회원가입이 완료 되었습니다.");
    setModalForm(true);
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
        validateState={checkId ? "error" : undefined}
        help={idMessage}
      >
        <Input onChange={onChangeId} value={userId} />
      </Form.Item>

      <Form.Item
        label="이름"
        name="userName"
        validateState={checkName ? "error" : undefined}
        help={nameMessage}
      >
        <Input onChange={onChangeName} value={userName} />
      </Form.Item>

      <Form.Item
        label="비밀번호"
        name="password"
        validateState={checkPw ? "error" : undefined}
        help={pwMessage}
      >
        <Input.Password onChange={onChangePw} value={password} />
      </Form.Item>

      <Form.Item
        label="비밀번호 확인"
        name="ConfirmPassword"
        validateState={checkConPw ? "error" : undefined}
        help={conPwMessage}
      >
        <Input.Password onChange={onCheckPw} value={confirmPw} />
      </Form.Item>

      <Form.Item label="회원타입" name="userType">
        <Radio.Group
          options={userTypes}
          onChange={onChangeUserType}
          value={userType}
        />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button
          type="primary"
          htmlType="submit"
          disabled={!(checkName && checkId && checkPw && checkConPw)}
        >
          회원가입
        </Button>
      </Form.Item>
    </Form>
  );
}

export default RegisterModal;
