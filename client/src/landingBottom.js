import { useState } from 'react';
import styled from 'styled-components/macro';
import theme from './styles/theme';

const {colors} = theme;
function landingBottom (){
    const Container = styled.div `
        min-width : 100vw;
        height: 1080px;
        background-color: ${colors.lightBeige};
    `;
    return (
        <Container>
            
        </Container>
    );
}

export default landingBottom;