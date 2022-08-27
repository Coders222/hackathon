import { useState } from 'react';
import styled from 'styled-components/macro';
import theme from './styles/theme';
import img from './images/frontImage.png';

const {colors} = theme;
function LandingBottom (){
    const Container = styled.div`
        min-width : 100vw;
        height: 1080px;
        background-image: url(${img});

    `;
    return (
        <Container>
            
        </Container>
    );
}

export default LandingBottom;