import React, { useState, useEffect } from 'react'
import NavBar from '../../../components/NavBar'
import RatioImg from '../../../components/PostCard/RatioImg';
import WriteComment from '../../../components/Form/WriteComment';
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { Input, Button } from 'antd';



const WriteDetail = () => {

    const { id } = useParams();
    const [number, setNumber] = useState(null);
    const comment = JSON.parse(localStorage.getItem("session"));
    // const WriteList = JSON.parse(localStorage.getItem("writeForm") || "[]");
    const loginWriter = JSON.parse(localStorage.getItem("session") || "[]");

    const [comments, setComments] = useState({
        id: "",
        comments: "",
        userId: loginWriter.userId,
    })

    useEffect(() => {
        const WriteList = JSON.parse(localStorage.getItem("writeForm") || "[]");
        const selectNumber = WriteList.find((item) => item.id === id);
        console.log(WriteList.find((item) => item.id === id))
        console.log(WriteList);
        console.log(id);
        setNumber(selectNumber);
        console.log(selectNumber);
        console.log(number)
    }, [id]);

    const handleDelete = () => {
        console.log("삭제")
    }
    const submit = () => {
        const OldComment = localStorage.getItem('comments') || '[]';
        localStorage.setItem("comments", JSON.stringify([{
            id: id,
            comments: comments,
            userId: loginWriter.userId
        }]));
    }

    return (

        <>
            <NavBar />
            <DetailBox>
                <RatioImg
                    widthRatio={1.916}
                    heightRatio={1}
                />
                <DetailContent>
                    {number ? <>
                        <div className='description-wrapper'>
                            <h3>제목</h3>
                            <div>
                                {number.title}
                            </div>
                        </div>
                        <div className='description-wrapper'>
                            <h3>내용</h3>
                            <div>
                                {number.content}
                            </div>
                        </div>
                        <div className='description-wrapper'>
                            <h3>날짜</h3>
                            <span>{number.date}</span>
                        </div>
                        <p>
                            <Link to={`/write/${id}`}>수정페이지 이동</Link>
                            <button onClick={handleDelete}>수정페이지 삭제</button>
                        </p>
                    </> :
                        <>
                            null
                        </>
                    }
                    <Input
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                    />
                    <Button onClick={submit}>댓글</Button>
                </DetailContent>
            </DetailBox>
        </>
    )
}

export default WriteDetail

const DetailBox = styled.div`
display: flex;
`
const DetailContent = styled.div`
width: 50%;
    .description-wrapper{
        margin-left: 10px;
        div{
            margin-left: 10px;
        }
    }   
`