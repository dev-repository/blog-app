import React, { useEffect, useState } from 'react'
import { Button, Input } from 'antd';
import { BackForm } from '../FormContainer';
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
    const handleSubmit = (e) => {
        //바로 페이지 바뀌는거 막음
        e.preventDefault();

        const usersString = localStorage.getItem('users') || '[]'; //로컬스토리지로 users에 저장되어있는객체를 모두 가져오거나 없으면 빈 배열[]을 넣음
        const old_users = JSON.parse(usersString); //예전 users를 json.parse로 넣어주는 변수 생성
        const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
        console.log(newId);
        localStorage.setItem("users", JSON.stringify([...old_users, users])); //새로운 배열을 저장 예전 변수를 먼저 넣고 users에 새로운데이터를 넣음
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