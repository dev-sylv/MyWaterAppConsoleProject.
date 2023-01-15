import React from 'react';
import styled from "styled-components";

interface Comp{
    image: string;
    text1: string;
    maintext: string;
    paratext: string;
    bgColor: string;
    fd: string;
    tt: string;
    bgButton: string;
    bg: string;
    br: string;
    buttonText: string;
    Colour: string;
}

const Transaction: React.FC<Comp> = ({image, text1, maintext, paratext, bgColor, fd, bg, tt, bgButton, br, buttonText, Colour}) => {
  return (
    <Container bgColor= {bgColor}>
        <Wrapper fd = {fd} Colour = {Colour}>
            <TextBox>
                <h3>{text1}</h3>
                <h1>{maintext}</h1>
                <p>
                    {paratext}
                </p>
                <Button bgButton = {bgButton} tt = {tt} bg = {bg} br={br}>
                {buttonText}
                </Button>
            </TextBox>
            <ImageBox>
                <Image src={image} />
            </ImageBox>
        </Wrapper>
    </Container>
  )
}

export default Transaction;

const Container = styled.div<{bgColor: string}>`
    width: 100%;
    height: 60vh;
    background-color: ${({bgColor}) =>(bgColor ? "black" : "white")};
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Wrapper = styled.div<{fd: string; Colour: string}>`
    width: 90%;
    height: 55vh;
    /* background-color: red; */
    display: flex;
    justify-content: space-between;
    color: ${({Colour}) => (Colour ? "white" : "black")};
    flex-direction: ${({fd}) => (fd ? "row" : "row-reverse")};
`;
const TextBox = styled.div`
    width: 43%;
    height: 55vh;
    /* background-color: green; */

    h3{
        color: #F9A826;
    }
    h1{
        font-size: 2rem;
        font-weight: 900;
    }
    p{
        font-size: 20px;
        text-align: justify;
    }
`;
const ImageBox = styled.div`
    width: 43%;
    height: 55vh;
    /* background-color: pink; */
`;
const Image = styled.img`
    object-fit: contain;
    width: 100%;
    height: 100%;
`;
const Button = styled.div <{bgButton: string; tt: string; bg: string; br: string}>`
 background-color: ${({bgButton}) =>( bgButton ? "orange" : "black")};
  width: 150px;
  height: 40px;
  text-align: center;
  display: flex;
  color: white;
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

