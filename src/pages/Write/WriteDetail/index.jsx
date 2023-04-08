import React, { useState, useEffect } from 'react'
import NavBar from '../../../components/NavBar'
import RatioImg from '../../../components/PostCard/RatioImg';
import WriteComment from '../../../components/Form/WriteComment';
import { useParams } from "react-router-dom";
import styled from 'styled-components';

const WriteDetail = () => {

    const { id } = useParams();
    const [number, setNumber] = useState(null);
    const comment = JSON.parse(localStorage.getItem("session"));
    // const WriteList = JSON.parse(localStorage.getItem("writeForm") || "[]");


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


    return (
        <>
            <NavBar />
            <DetailBox>
                <RatioImg
                    widthRatio={1.916}
                    heightRatio={1}
                />
                <DetailContent>
                    {/* <div className='description-wrapper'>
                        <h4>제목</h4>
                        <div>
                            {number.title}
                        </div>
                    </div>
                    <div className='description-wrapper'>
                        {number.content}
                    </div>
                    <div className='description-wrapper'>
                        <span>{number.date}</span>
                        <span>.</span>
                        <span>개의 댓글</span>
                    </div> */}
                </DetailContent>
            </DetailBox>
            <WriteComment {...number} />
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
        display: flex;
     background-color: red;
    }   
`