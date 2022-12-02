import React from 'react';
import styled from "styled-components";

function Header() {
  return (
    <div>
        <Container>
            <Logo>CODELAB</Logo>
            <Nav>
                <Navigation>HOME</Navigation>
                <Navigation>HOME</Navigation>
                <Navigation>HOME</Navigation>
                <Button>Add</Button>
            </Nav>
        </Container>
    </div>
  )
}

export default Header;

const Container = styled.div`
height: 70px;
width: 100%;
background-color: black;
color: white;
display: flex;
justify-content: space-between;
align-items: center;
`;
const Logo = styled.div`
margin-left: 30px;
font-size: 20px;
font-weight: bold;
`;
const Nav = styled.div`
display: flex;
margin-right: 20px;
align-items: center;
color: white;
`;
const Navigation = styled.div`
margin-left: 10px;
margin-right: 10px;
`;
const Button = styled.button`
height: 40px;
width: 150%;
`;

