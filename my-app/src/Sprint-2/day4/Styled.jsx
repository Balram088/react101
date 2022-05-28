import React from 'react'
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
const Wrraper = styled.div`
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
`
const Styled = () => {
  return (
    <div>
        
        <Title>
          <h1 >Hello React</h1>
        </Title>
        <Wrraper>
            <div>
                Hello 
            </div>
        </Wrraper>
      
    </div>
  )
}

export default Styled
