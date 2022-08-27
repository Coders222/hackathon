import { useState } from 'react';
import styled from 'styled-components';
import theme from './styles/theme';
import img1 from './images/frontImage.png';

const {colors} = theme;
function LandingBottom (){
    const Container = styled.div`
        min-width: 30vw;
        height: 1080px;
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
    const Title = styled.p`
        font-size: 65px;
        text-align: left;
        color: ${colors.title};
        position: relative;
        margin: 100px;
        top: 50px;

    `

    const Subtitle = styled.p`
        font-size: 30px;
        text-align: center;
        color: ${colors.title};
        position: relative;
        top: 20px;

    `

    const Oval = styled.div`
        width: 300px;
        height: 80px;
        background: ${colors.lightBeige};
        border-radius: 50%;
        position: relative;
        top: 200px;
        left: 350px;
        text-align: center;
      
    `
    return (
        <Container>
            <TitleRect>
                <Title> 
                Summarize <br></br>
                in seconds <br></br>
                with Symbl.ai 
                </Title>
            </TitleRect>

            <Oval>
                <Subtitle>
                    Get started
                </Subtitle>
            </Oval>
        </Container>
    );
}

export default LandingBottom;