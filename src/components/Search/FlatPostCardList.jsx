import React from "react";
import styled from "styled-components";
import FlatPostCard from "./FlatPostCard";


function FlatPostCardList(props) {
    return(
        <PostCardListBlock>

        {props.count.reverse().map(i => {
            return(
                <FlatPostCard key={i.id} i={i}/> 
            );
        })}
        
            {/* {Array.from({ length: 10 }).map((_, index) => (
                        <FlatPostCard
                          key={`-${index}`}
                        />
            ))} */}
    
        </PostCardListBlock>
    );
};

const PostCardListBlock = styled.div`
`

export default FlatPostCardList;
