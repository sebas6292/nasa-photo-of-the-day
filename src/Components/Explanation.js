import React from 'react';

import styled from 'styled-components';

const StyledExplanation = styled.div`
    border: 1px solid black; 
    border-radius: 50%;
    background-color: ${pr => pr.theme.primaryColor}; 
`

function Explanation(props) {
    return (
        <StyledExplanation>
            {props.explanation}
        </StyledExplanation>
     
    )
}

export default Explanation;
