import React, { useState } from 'react'
import { Button, Input } from 'antd';
import { BackForm } from '../FormContainer';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const navigate = useNavigate();
    const writingRegister = useNavigate();

    const useNavi = () => {
        navigate('/register');
    }
    const writeRegister = () => {
        writingRegister('/write')
    }

    const newUser = JSON.parse(localStorage.getItem('newUser'));

    const handleLogin = () => {
        // Local Storage에서 회원가입한 정보를 가져옴

        if (newUser.userName === username && newUser.password === password) {
            // 로그인 상태를 로그인으로 설정
            setLoggedIn(true);
        } else {
            alert("ddddd");
        }
    }

    return (
        <BackForm>
            <Input type='text' onChange={(e) => setUsername(e.target.value)} />
            <Input type='password' onChange={(e) => setPassword(e.target.value)} />
            <div className='LoginBtn'>
                <Button onClick={handleLogin}>로그인</Button>

                <Button type="primary" onClick={useNavi}>
                    회원가입
                </Button>
            </div>
            {loggedIn ? <div>로그인완료</div> : <div>로그인안되었음</div>}
            <Button onClick={writeRegister}>
                등록페이지 이동
            </Button>
        </BackForm>
    )
}

export default LoginForm

