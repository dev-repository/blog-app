import React, { useState, useRef } from 'react'
import { Button, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import styled from 'styled-components';
import { generateUUID } from '../../utils/utils';
import WriteComment from './WriteComment';
import { useLocation } from 'react-router-dom';

const WriteForm = () => {
    const loginWriter = JSON.parse(localStorage.getItem("session") || "[]");
    const [writeForm, setWriteForm] = useState({
        title: "",
        content: "",
        date: "",
        writer: loginWriter.userId,

    }) //title과 date를 가지는 writeForm state생성
    const handleWrite = (e) => {
        setWriteForm({
            ...writeForm,
            [e.target.name]: e.target.value,
        })
    }

    // const onEdit = (targetId, newContent) => {
    //     setWriteForm(
    //         writeForm.map((it) => it.id === targetId ?
    //             { ...it, content: newContent } : it)
    //     )
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(loginWriter);
        const id = generateUUID();
        const userWrite = localStorage.getItem('writeForm') || '[]';
        const old_write = JSON.parse(userWrite);
        localStorage.setItem("writeForm", JSON.stringify([...old_write, {
            ...writeForm, id: id
        }]))
    }

    // const { id } = useParams();

    // useEffect(() => {
    //     const WriteList = JSON.parse(localStorage.getItem("writeForm") || "[]");
    //     const selectNumber = WriteList.find((item) => item.id === id);
    //     console.log(WriteList.find((item) => item.id === id))
    //     console.log(WriteList);
    //     console.log(id);
    //     console.log(selectNumber);
    //     console.log(number)
    // }, [id]);


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
                <label htmlFor='writer'>작성자 명</label>
                <Input
                    id='writer'
                    type='text'
                    name='writer'
                    value={loginWriter.userId}
                    onChange={handleWrite}
                    disabled
                />
            </form>
            <Button onClick={handleSubmit}>글 등록</Button>
            <WriteComment writeForm={writeForm} />
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