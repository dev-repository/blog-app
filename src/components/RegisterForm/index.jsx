import React, { useEffect, useState } from 'react'
import { Button, Input } from 'antd';
import { BackForm } from '../shared/FormContainer';
import { useNavigate } from 'react-router-dom';


const RegisterForm = () => {
    const [signed, setSigned] = useState(false);

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
    }
    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    }, [users]);

    // useEffect(() => {
    //     const user = localStorage.getItem('users');
    //     console.log(user);
    //     const users = user ? JSON.parse(user) : [];
    //     setUsers(users);
    // }, [])

    const handleSubmit = (e) => {
        //바로 페이지 바뀌는거 막음
        e.preventDefault();
        setSigned(true);
        navigate();
    }


    return (
        <BackForm>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='userid'>userId</label>
                    <Input
                        id='userid'
                        name='userId'
                        value={users.userId}
                        onChange={handleChangeUser}
                    />
                    <label htmlFor='userName'>userName</label>
                    <Input
                        id='userName'
                        name='userName'
                        value={users.userName}
                        onChange={handleChangeUser}
                    />
                    <label htmlFor='password'>password</label>
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
            </form>
            <Button onClick={navigate}>
                로그인페이지로 이동
            </Button>
        </BackForm>
    )
}

export default RegisterForm