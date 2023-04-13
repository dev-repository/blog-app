import React from "react";
import styled from "styled-components";
import FlatPostCard from "./FlatPostCard";

function FlatPostCardList() {
    return(
        <PostCardListBlock>
            {Array.from({ length: 10 }).map((_, index) => (
                        <FlatPostCard
                          key={`-${index}`}
                        />
            ))}
    
        </PostCardListBlock>
    );
};

const PostCardListBlock = styled.div`
`

export default FlatPostCardList;