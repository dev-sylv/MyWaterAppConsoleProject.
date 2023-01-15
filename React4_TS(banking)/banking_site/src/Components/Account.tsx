import React from 'react';
import Transaction from './Transaction';
import createAccount from "./Assets/createAccount.svg";

const Account = () => {
  return (
    <div>
         <Transaction 
        Colour=''
        buttonText = "Get Started"
        fd = "fd"
        bgColor=''
        text1= "Create an account" 
        image= {createAccount} 
        maintext = "Creating an account is extremely easy" 
        paratext = "Create an account with us today with just a pro-active step by picking your phone up, dial *900# and follow the directions there"
        tt = "s"
        br = "hh"
        bgButton=''
        bg = ""
        />
    </div>
  )
}

export default Account;