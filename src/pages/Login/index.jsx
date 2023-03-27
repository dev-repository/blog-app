import React, { useState } from 'react'

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const ss = JSON.parse(localStorage.getItem('newUser'));
    console.log(ss.userName);
    console.log("12");

    const handleLogin = () => {
        // Local Storage에서 회원가입한 정보를 가져옴

        if (ss.userName === username && ss.password === password) {
            // 로그인 상태를 로그인으로 설정
            setLoggedIn(true);
        } else {
            alert("ddddd");
        }
    }

    return (
        <div>
            <input type='text' onChange={(e) => setUsername(e.target.value)} />
            <input type='password' onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>로그인</button>
            {loggedIn ? <div>로그인완료</div> : <div>로그인안되었음</div>}
        </div>
    )
}

export default Login

