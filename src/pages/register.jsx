import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Register = () => {

    const [userId, setUserId] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [signed, setSigned] = useState(false);
    const [users, setUsers] = useState([]);
    const useNavi = useNavigate();
    const navi = useNavigate();

    const navigate = () => {
        navi("/login");
    }
    const handleSubmit = (e) => {
        //바로 페이지 바뀌는거 막음
        e.preventDefault();

        const newUser =
        {
            userId: userId,
            userName: userName,
            password: password,
        };
        setUsers([...users, newUser]);
        console.log(newUser);
        localStorage.setItem('newUser', JSON.stringify(newUser));

        setSigned(true);

        setUserId('');
        setUserName('');
        setPassword('');

        navigate();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='userid'>userId</label>
                    <input id='userid' value={userId} onChange={(e) => setUserId(e.target.value)} />
                    <label htmlFor='userName'>userName</label>
                    <input id='userName' value={userName} onChange={(e) => setUserName(e.target.value)} />
                    <label htmlFor='password'>password</label>
                    <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button onClick={handleSubmit}>
                    회원가입
                </button>
            </form>
            <button onClick={navigate}>
                로그인페이지로 이동
            </button>
        </>
    )
}

export default Register