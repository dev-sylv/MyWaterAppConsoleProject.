import React from 'react';
import Transaction from './Transaction';
import transaction from "./Assets/online-transact.svg";
import login from "./Assets/login.svg";

const TransactProps = () => {
  return (
    <div>
        <Transaction 
        Colour='col'
        buttonText = "Get Started"
        fd = "fd"
        bgColor='hj'
        text1= "Virtual Banking" 
        image= {login} 
        maintext = "Unlimited Transactions with Zero fees" 
        paratext = "Trust us today for your banking and online transactions. Open an account with us today and secure your free profit. Open now!!"
        tt = ""
        br = ""
        bgButton='bg'
        bg = ""
        
        />
        <Transaction 
        Colour=''
        buttonText = "Login"
          tt = ""
          br = ""
          bgButton=''
          bg = ""
       fd = ""
       bgColor=''
       text1= "Login now and bank with us" 
       image= {login} 
       maintext = "Login to your account at any time" 
       paratext = "Click on the button below to get started. Get access to unlimited transactions and transact without stress from any part of the world. Login now!!!"/>
     
        


    </div>
  )
}

export default TransactProps