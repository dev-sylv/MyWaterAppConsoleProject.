import React from 'react';
import TransactProps from './TransactProps';
import Services from "./Services";
import Account from "./Account"

const Body = () => {
  return (
    <div>
        <TransactProps />
       <Services />
      <Account />
    </div>
  )
}

export default Body