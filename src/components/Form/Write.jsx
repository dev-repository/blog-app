import React, { useState } from 'react'
import { Button, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import styled from 'styled-components';
import WriteList from './WriteList';


const WriteForm = () => {

    // const dataId = useRef(0);

    const [writeForm, setWriteForm] = useState({
        title: "",
        content: "",
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
    const list = JSON.parse(localStorage.getItem("writeForm") || "[]");
    console.log(list);

    return (
        <WriteBox>
            <form onSubmit={handleSubmit}>
                <label htmlFor='title'>글 제목</label>
                <Input
                    id='title'
                    type='text'
                    name='title'
                    placeholder='글제목'
                    value={writeForm.title}
                    onChange={handleWrite}
                />
                <label htmlFor='content'>글 내용</label>
                <TextArea
                    id='content'
                    name='content'
                    rows={4}
                    placeholder="maxLength is 6"
                    maxLength={6}
                    value={writeForm.content}
                    onChange={handleWrite}
                />
                <label htmlFor='date'>글 작성일자</label>
                <Input
                    id='date'
                    type='date'
                    name='date'
                    value={writeForm.date}
                    onChange={handleWrite}
                />
            </form>
            <Button onClick={handleSubmit}>글 등록</Button>
            <WriteList />
            <div>
                {list.map((item) => (
                    <div key={item.title}>
                        {item.title}
                    </div>
                ))}
                {/* {writeForm.length}개 */}
            </div>
        </WriteBox>
    )
}

export default WriteForm

const WriteBox = styled.div`
width: 1000px;
height: 700px;
background: #f1f1f1;
padding: 50px;
border-radius: 50px;
    label{
        font-weight: bold;
    }
    Input, Textarea{
        margin-bottom: 20px;
    }
    Button{
        float: right;
    }
`