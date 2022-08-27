import { useState } from 'react';
import styled from 'styled-components';
import theme from './styles/theme';
import img1 from './images/frontImage.png';

const {colors} = theme;
function LandingBottom (props){
    const Container = styled.div`
        width: 100vw;
        height: 100vh;
        margin: auto;
        background-image: url(${img1});
        background-repeat: no-repeat;
        background-size: 100% 100%;
        
    `;

    const TitleRect = styled.div`
        min-width: 1vw;
        height: 350px;
        width: 750px;
        position: relative;
        top: 150px;
        left: 100px;
        background-color: ${colors.lightBeige};
    `
    const Title = styled.h1`
        font-size: 50px;
        text-align: left;
        color: palevioletred;
        position: relative;
        margin: 50px;
        margin-top: 50px;
        white-space: pre-line;

    `
    return (
        <Container>
            <TitleRect>
                <Title> 
                Summarize 
                in seconds 
                with Symbl.ai 
                </Title>

                


            </TitleRect>
        </Container>
    );
}

export default LandingBottom;