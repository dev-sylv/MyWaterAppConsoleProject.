import React from 'react'
import styled from 'styled-components';
import service1 from "./Assets/service1.svg";
import service2 from "./Assets/service2.svg";
import service3 from "./Assets/service3.svg";

// interface Service{
//     image: string;
//     mainText: string;
//     subText: string;
// }

const Services: React.FC = ({
    // image, 
    // mainText, 
    // subText
}) => {
  return (
    <Container>
         <h1>Our Services</h1>
        <Wrapper>
            <Card>
               
               <Img  src={service1} />
              
                <Content>
                <h3>
                    Location Tracker
                </h3>
                <p>
                   We'll help track your location and
                   send a signal to security agencies and your loved ones should you be in danger 
                </p>
                </Content>

            </Card>

            <Card>
            <Img  src={service2}  />
               <Content>
               <h3>
                   Mobile Banking
               </h3>
               <p>
                   Transact from the comfort of your homes from anywhere in the world. All day! Any time!!
               </p>
               </Content>

           </Card>

           <Card>
           <Img  src={service3}  />
            <Content>
            <h3>
                   Stripe Payments
               </h3>
               <p>
                   Use your card for stripe payments and get sweet discounts. Register and bank with us today to start enjoying this!!               </p>

            </Content>
           </Card>

        </Wrapper>
    </Container>

    
  )
}

export default Services;

const Container = styled.div`
    width: 100%;
    height: 70vh;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
`;
const Wrapper = styled.div`
    width: 80%;
    height: 50vh;
    /* background-color: red; */
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: black;
`;
const Card = styled.div`
    width: 25%;
    height: 50vh;
    background-color: white;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const Img = styled.img`
    width: 100%;
    height: 25vh;
    object-fit: contain;
    margin: 5px;
    padding: 10px;
`;
const Content = styled.div`
    width: 100%;
    height: 25vh;
    text-align: center;
    font-weight: 500;
`;