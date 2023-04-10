import React, { useState } from 'react'
import { Button, Input } from 'antd';
import { BackForm } from '../FormContainer';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const useNavi = () => {
        navigate('/register');
    }


    // const newUser = JSON.parse(localStorage.getItem('newUser'));
    const handleLogin = () => {
        // Local Storage에서 회원가입한 정보를 가져옴

        const usersString = localStorage.getItem("users") || "[]";
        const old_users = JSON.parse(usersString);

        const user = old_users.find(
            (user) => user.userId === userId && user.password === password
        ); //user라는 변수는 예전users데이터에서 아이디 같은거 패스워드 같은걸 찾는다

        if (user) { //위 조건이 다 맞으면 session을생성하고 조건에 맞았던 데이터를 json.stringify에 넣음
            localStorage.setItem("session", JSON.stringify(user));
            setLoggedIn(true);
            const postsString = localStorage.getItem("posts") || "[]";
            const old_posts = JSON.parse(postsString);
            localStorage.setItem(
                "posts",
                JSON.stringify([
                    ...old_posts,
                    {
                        userId: user.userId,
                        title: "123",
                        content: "123",
                        likes: 0,
                    },
                ])
            );
        } else {
            alert("로그인 실패");
        }

    };

    return (
        <BackForm>
            <label htmlFor='userId'>userId</label>
            <Input
                id='userId'
                type='text'
                onChange={(e) =>
                    setUserId(e.target.value)}
            />
            <label htmlFor='password'>password</label>
            <Input
                id='password'
                type='password'
                onChange={(e) =>
                    setPassword(e.target.value)}
            />
            <div className='LoginBtn'>
                <Button onClick={handleLogin}>로그인</Button>

                <Button type="primary" onClick={useNavi}>
                    회원가입
                </Button>
            </div>
        </BackForm>
    )
}

export default LoginForm

