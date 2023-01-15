import React from 'react'
import styled from 'styled-components';
import FooterProps from './FooterProps';

const Footer = () => {
  return (
    <Container>
        <Wrap1>
            <Line1>
            <FooterProps
                 headText='Find Work' 
                 text="For Technologists"
                
            />

            <FooterProps
                 headText='' 
                 text="For Technologists"
                
            />

            <FooterProps
                 headText='' 
                 text="For Technologists"
                
            />

           <FooterProps
                 headText='' 
                 text="For Technologists"
                
            />
            </Line1>

            <Line2>
            <FooterProps
                 headText='Discover' 
                 text="For Technologists"
                
            />

            <FooterProps
                 headText='' 
                 text="For Technologists"
                
            />

            <FooterProps
                 headText='' 
                 text="For Technologists"
                
            />

            <FooterProps
                 headText='' 
                 text="For Technologists"
                
            />
            </Line2>
            <Line3>
            <FooterProps
                 headText='Contact' 
                 text="For Technologists"
                
           />
           <FooterProps
                 headText='' 
                 text="For Technologists"
                
           />
           <FooterProps
                 headText='' 
                 text="For Technologists"
                
           />
           <FooterProps
                 headText='' 
                 text="For Technologists"
                
            />
            </Line3>
            <Line4>
            <FooterProps
                 headText='About' 
                 text="For Technologists"
                
           />
             <FooterProps
                 headText='' 
                 text="For Technologists"
                
    />
    <FooterProps
                 headText='' 
                 text="For Technologists"
                
    />
    <FooterProps
                 headText='' 
                 text="For Technologists"
                
    />
            </Line4>
        </Wrap1>
        {/* <Wrap2></Wrap2> */}
    </Container>
  )
}

export default Footer;

const Container = styled.div`
    width: 100%;
    height: 50vh;
    background-color: black;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
`;
const Wrap1 = styled.div`
    width: 70%;
    height: 25vh;
    /* background-color: red; */
    display: flex;
    justify-content: space-around;
    align-items: center;

`;
const Wrap2 = styled.div`
    width: 80%;
    height: 7vh;
    background-color: blue;
`;
const Line1 = styled.div`
    width: 15%;
    height: 25vh;
    /* background-color: blue; */
    text-align: center;
    color: white;
`;
const Line2 = styled.div`
    width: 15%;
    height: 25vh;
    /* background-color: yellow; */
    text-align: center;
    color: white;
`;
const Line3 = styled.div`
    width: 15%;
    height: 25vh;
    /* background-color: green; */
    text-align: center;
    color: white;
`;
const Line4 = styled.div`
    width: 15%;
    height: 25vh;
    /* background-color: orange; */
    text-align: center;
    color: white;
`;