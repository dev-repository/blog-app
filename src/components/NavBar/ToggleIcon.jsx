import React,{ useState } from "react";
import styled from "styled-components";
import { animated, useTransition } from "react-spring";
import { Icons } from "../../static/svg/Icons";

function ToggleIcon(){
    const [toggle, setToggle] = useState(false);
    const transitions = useTransition(toggle, {
      initial: {
        transform: 'scale(1) rotate(0deg)',
        opacity: 1,
      },
      from: {
        transform: 'scale(0) rotate(-180deg)',
        opacity: 0,
      },
      enter: {
        transform: 'scale(1) rotate(0deg)',
        opacity: 1,
      },
      leave: {
        transform: 'scale(0) rotate(180deg)',
        opacity: 0,
      },
  
      reverse: true,
    });
    return(
        <IconBtn onClick={()=> setToggle(!toggle)}>
              {transitions((style, item) =>
                  item ? (
                    <Positioner>
                    <AnimatedSVGWrapper style={style}>
                        <Icons.MoonIcon />
                    </AnimatedSVGWrapper>
                </Positioner>
            ) : (
                <Positioner>
                    <AnimatedSVGWrapper style={style}>
                        <Icons.SunIcon />
                    </AnimatedSVGWrapper>
                </Positioner>
                  ),
                )}
        </IconBtn>
    );
}
const IconBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 0.25rem;
  color: white;
  position: relative;

  &:hover {
    background: rgba(0,0,0,0.05);
  }
`;

const Positioner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SVGWrapper = styled.div`
  color: #212529;
  svg {
    display: block;
  }
`;

const AnimatedSVGWrapper = animated(SVGWrapper);

export default ToggleIcon;