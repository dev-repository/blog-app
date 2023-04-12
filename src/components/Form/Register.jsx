import React, { useEffect, useState } from 'react'
import { Button, Input } from 'antd';
import { BackForm } from '../FormContainer';
import { useNavigate } from 'react-router-dom';


const RegisterForm = () => {
    const [signed, setSigned] = useState(false);
    const [idCheck, setIdCheck] = useState(false);
    const [pwdCheck, setPwdCheck] = useState(false);
    const [nameCheck, setNameCheck] = useState(false);


    const navi = useNavigate();
    const navigate = () => {
        navi("/login");
    }
    const [users, setUsers] = useState({
        userId: "",
        userName: "",
        password: "",
    });

    const handleChangeUser = (e) => {
        setUsers({
            ...users,
            [e.target.name]: e.target.value,
        })
        // 아이디 유효성 검사
        const value = e.target.value;
        const idRegex = /^[a-zA-Z0-9]{5,15}$/; // 영문 대소문자와 숫자, 5~15자리
        const isValidUsername = idRegex.test(value);
        setIdCheck(isValidUsername);

        const nameRegex = /^[가-힣]{2,4}$/; // 2자 이상 4자 이하의 한글 이름만 허용
        const isValidName = nameRegex.test(value);
        setNameCheck(isValidName);

        const pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/; // 영문 대소문자와 숫자, 8자리 이상
        const isValidPassword = pwdRegex.test(value);
        setPwdCheck(isValidPassword);
    }
    const handleSubmit = (e) => {
        //바로 페이지 바뀌는거 막음
        e.preventDefault();
        const usersString = localStorage.getItem('users') || '[]'; //로컬스토리지로 users에 저장되어있는객체를 모두 가져오거나 없으면 빈 배열[]을 넣음
        const old_users = JSON.parse(usersString); //예전 users를 json.parse로 넣어주는 변수 생성
        const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
        localStorage.setItem("users", JSON.stringify([...old_users, users])); //새로운 배열을 저장 예전 변수를 먼저 넣고 users에 새로운데이터를 넣음
        setSigned(true);
        navigate();
        // if (idCheck && nameCheck && pwdCheck) {
        // } else {
        //     alert("형식이 맞지않는 조건이 있습니다");
        // }
    }


    return (
        <BackForm>
            <form onSubmit={handleSubmit}>
                <div className='register_box'>
                    <label htmlFor='userid'>userId</label>
                    {!idCheck && <span style={{ color: 'red', marginLeft: 10 }}>5~15자의 영문 대소문자, 숫자를 사용하세요</span>}
                    <Input
                        id='userid'
                        name='userId'
                        value={users.userId}
                        onChange={handleChangeUser}
                    />
                    <label htmlFor='userName'>userName</label>
                    {!nameCheck && <span style={{ color: 'red', marginLeft: 10 }}>2~4자의 한글 이름만 허용합니다.</span>}
                    <Input
                        id='userName'
                        name='userName'
                        value={users.userName}
                        onChange={handleChangeUser}
                    />
                    <label htmlFor='password'>password</label>
                    {!pwdCheck && <span style={{ color: 'red', marginLeft: 10 }}>8자 이상의 영문 대소문자와 숫자를 조합하세요.</span>}
                    <Input
                        type='password'
                        name='password'
                        id='password'
                        value={users.password}
                        onChange={handleChangeUser}
                    />
                </div>
                <Button onClick={handleSubmit}>
                    회원가입
                </Button>
                <Button onClick={navigate}>
                    로그인페이지로 이동
                </Button>
            </form>
        </BackForm>
    )
}

export default RegisterForm

