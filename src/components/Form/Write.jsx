import React, { useState } from 'react'
import { Button, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';


const WriteForm = () => {

    const [writeForm, setWriteForm] = useState({
        title: "",
        date: "",
    }) //title과 date를 가지는 writeForm state생성

    const handleWrite = (e) => {
        setWriteForm({
            ...writeForm,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(writeForm)
        console.log("123");

        const userWrite = localStorage.getItem('writeForm') || '[]';
        const old_write = JSON.parse(userWrite);
        localStorage.setItem("writeForm", JSON.stringify([...old_write, writeForm]))
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Input
                    type='text'
                    name='title'
                    placeholder='글제목'
                    value={writeForm.title}
                    onChange={handleWrite}
                />
                <TextArea rows={4} placeholder="maxLength is 6" maxLength={6} />
                <Input
                    type='date'
                    name='date'
                    value={writeForm.date}
                    onChange={handleWrite}
                />
            </form>
            <Button onClick={handleSubmit}>글 등록</Button>
        </>
    )
}

export default WriteForm