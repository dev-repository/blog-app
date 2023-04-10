import React, { useState, useEffect } from 'react'
import NavBar from '../../../components/NavBar'
import RatioImg from '../../../components/PostCard/RatioImg';
import WriteComment from '../../../components/Form/WriteComment';
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { Input, Button } from 'antd';
import { generateUUID } from '../../../utils/utils';
import moment from 'moment';



const WriteDetail = () => {

    const { id } = useParams();
    const [number, setNumber] = useState(null);
    const loginUser = JSON.parse(localStorage.getItem("session"));
    const comment_date = moment().format('YYYYMMDD');
    const mList = JSON.parse(localStorage.getItem("comments") || "[]");
    // const WriteList = JSON.parse(localStorage.getItem("writeForm") || "[]");
    const loginWriter = JSON.parse(localStorage.getItem("session") || "[]");
    const [ment, setMent] = useState({
        id: '',
        comment: '',
        userId: loginUser.userId,

    })

    useEffect(() => {
        const WriteList = JSON.parse(localStorage.getItem("writeForm") || "[]");
        const selectNumber = WriteList.find((item) => item.id === id);
        setNumber(selectNumber);
    }, [id]);

    const handleDelete = () => {
        const old = localStorage.getItem("writeForm") || '[]';
        const old_delete = JSON.parse(old);
        localStorage.setItem("writeForm", JSON.stringify(
            [...old_delete].filter((item) => item.id !== id)
            //배열 돌면서 id가 해당id값이 아닌요소들만 배열에 다시 추가됨
        ))
    }
    const submit = () => {
        const OldComment = localStorage.getItem('comments') || '[]';
        const old_comment = JSON.parse(OldComment);
        const postId = generateUUID();
        localStorage.setItem("comments", JSON.stringify([...old_comment,
        {
            id: id,
            comment: ment,
            userId: loginWriter.userId,
            postId: postId,
            comment_date: comment_date,
        }
        ]));
        window.location.reload();
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
                    <div>
                        <div>
                            <div className='coment'>
                                <h4>댓글</h4>
                                <h4>작성날짜</h4>
                            </div>
                            {mList ? (
                                mList.map((item, index) => (
                                    <div key={index} className='coment'>
                                        <span>
                                            {item.comment}
                                        </span>
                                        <span>
                                            {item.comment_date}
                                        </span>
                                    </div>
                                ))
                            ) : (
                                <p></p>
                            )
                            }
                        </div>
                        <div>
                            <Input
                                value={ment.coment}
                                onChange={(e) => setMent(e.target.value)}
                            />
                            <Button onClick={submit}>댓글</Button>
                        </div>
                    </div>
                </DetailContent>
            </DetailBox >
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
    .coment{
        padding: 0 40px;
        display:flex;
        justify-content: space-between;
    }
`