import React, { useState } from 'react'
import { Button, Input } from 'antd';


const WriteForm = () => {

    const [writeForm, setWriteForm] = useState({
        title: "",
        date: "",
    })

    const handleWrite = (e) => {
        setWriteForm({
            ...writeForm,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(writeForm)
        console.log("123")
    }

    return (
        <>
            <form onClick={handleSubmit}>
                <Input
                    type='text'
                    name='title'
                    placeholder='글제목'
                    value={writeForm.title}
                    onChange={handleWrite}
                />
                <Input
                    type='text'
                    name='date'
                    value={writeForm.date}
                    onChange={handleWrite}
                />
            </form>
            <Button type='submit'>글 등록</Button>
        </>
    )
}

export default WriteForm