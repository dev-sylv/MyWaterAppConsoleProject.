import React from 'react'
import styled from 'styled-components';

interface FooterText{
    headText: string;
    text: string;
}
const FooterProps: React.FC<FooterText> = ({text, headText}) => {
  return (
    <div>
        <H3>{headText}</H3>
        <p>{text}</p>
    </div>
  )
}

export default FooterProps

const H3 = styled.div`
    
margin: 0;
`