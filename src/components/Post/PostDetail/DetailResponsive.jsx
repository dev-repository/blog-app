import React from "react";
import styled from "styled-components";

function DetailResponsive(props) {
  return (
    <DetailBlock
      children={props.children}
      className={props.className}
      style={props.style}
    />
  );
}
const DetailBlock = styled.div`
  width: 768px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export default DetailResponsive;
