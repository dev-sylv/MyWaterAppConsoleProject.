import React from 'react';
import styled from "styled-components";

interface Button{
  text: string;
  br: string;
  bg: string;
  tt: string;
  bgButton: string;
}

const GlobalButton: React.FC<Button> = ({ text, br, bg, tt, bgButton}) => {
  return (
    <div>
       <Button br={br} bg={bg} tt={tt} bgButton = {bgButton}>
      {text}
    </Button>
    </div>
  )
}

export default GlobalButton;

const Button = styled.div<{ br: string; bg: string; tt: string; bgButton: string}>`
  background-color: ${({bgButton}) =>( bgButton ? "orange" : "black")};
  width: 150px;
  height: 40px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ br }) => (br ? "30px" : "3px")};
  transition: all 350ms;

  :hover {
    cursor: pointer;
    transform: ${({ tt }) => (tt ? "scale(1.05)" : "scale(0.95)")};
    background-color: ${({ bg }) => (bg ? "black" : "orange")};
  }

`;