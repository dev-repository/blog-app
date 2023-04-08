import React, { useState } from 'react'
import { Button, Input } from 'antd';

const WriteComment = ({ title, content, date, writeForm }) => {
    const [comment, setComment] = useState('');
    const [isEdit, setIsEdit] = useState(false);
    const toggleIsEdit = () => setIsEdit(!isEdit);

    const [editContent, setEditContent] = useState(content);
    console.log(writeForm);
    console.log("!23123");
    const handleQuitEdit = () => {
        setIsEdit(false);
        setEditContent(content);
    }
    const handleEdit = () => {
        console.log(title);
    }

    return (
        <>
            <Input
                value={comment}
                onChange={() => setComment(e.target.value)}
            />
            {isEdit ? (
                <>
                    <textarea
                        value={editContent}
                        onChange={(e) => setEditContent(e.target.value)}
                    />
                </>
            )
                : (
                    <>
                        <span>{title}</span>
                        <span>{content}</span>
                        <span>{date}</span>
                    </>
                )}
            {isEdit ?
                <>
                    <Button onClick={handleQuitEdit}>수정 취소</Button>
                    <Button onClick={handleEdit}>수정 완료</Button>
                </> :
                <>
                    <Button onClick={toggleIsEdit}>수정 하기</Button>
                </>
            }
        </>
    )
}

export default WriteComment