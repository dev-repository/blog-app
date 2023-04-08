import React, { useState, useEffect } from 'react'
import NavBar from '../../../components/NavBar'
import RatioImg from '../../../components/PostCard/RatioImg';
import WriteComment from '../../../components/Form/WriteComment';
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import { Button } from 'antd';
import { Link } from "react-router-dom";



const WriteDetail = () => {

    const { id } = useParams();
    const [number, setNumber] = useState(null);
    const comment = JSON.parse(localStorage.getItem("session"));
    // const WriteList = JSON.parse(localStorage.getItem("writeForm") || "[]");
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
                        </div>
                    </> :
                        <>null</>}
                </DetailContent>
            </DetailBox>
            <Link to={`/write/${id}`}>수정페이지 이동</Link>
            {number ? <><WriteComment {...number} /></> : <>null</>}
            {/* number가 무조건  null로 설정되기때문에 props로 내려서 사용할때도 삼항연산자로 체크 후에 써야함 */}
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