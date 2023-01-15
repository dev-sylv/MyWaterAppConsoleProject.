import React from 'react';
import styled from "styled-components";
import background from "./Assets/star-bg.jpg";
import GlobalButton from './GlobalButton';


const Header = () => {
  return (
    <div>
        <Container>
            <Image src={background} />
            <Wrapper>
                <Virtual>
                    Virtual Banking Made Easy
                </Virtual>
                <Subtittle>
                    Sign up for a new account today and receive $500 in profit towards your next payment
                </Subtittle>
                <GlobalButton
                bgButton='bg' br="tt" bg="hh" tt="b" text="Get Started" />
            </Wrapper>
        </Container>
    </div>
  )
}

export default Header;

const Container = styled.div`
    width: 100%;
    height: 80vh;
    /* background-color: red; */
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`;
const Image = styled.img`
    object-fit: cover;
    width: 100%;
    height: 80vh;
    position: absolute;
`;
const Wrapper = styled.div`
    width: 500px;
    height: 200px;
    /* background-color: red; */
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const Virtual = styled.div`
  font-size: 37px;
  font-weight: 700;
  margin: 0;
  text-align: center;
`;
const Subtittle = styled.div`
  margin: 10px 0;
  font-size: 20px; 
  padding: 0;
  text-align: center;
`;