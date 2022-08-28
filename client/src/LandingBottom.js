import { useState } from 'react';
import styled from 'styled-components';
import theme from './styles/theme';
import img1 from './images/frontImage.png';

const {colors} = theme;
function LandingBottom (props){
    const Container = styled.div`
        width: 100%;
        height: 200vh;
        margin: auto;
        background-image: url(${img1});
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: relative;
        background-size: cover;
        background-attachment: fixed;
        border-top:1px ${colors.lightBeige} solid;
        
    `;

    const TitleRect = styled.div`
        min-width: 1vw;
        height: 36vh;
        width: 30vw;
        position: relative;
        top: 15vh;
        left: 10vh;
        border-radius: 50%;
        border: none;
        border-radius: 64px;
        background-color: ${colors.lightBeige};
        background-attachment: fixed;

    `
    const Title = styled.p`
        font-size: 3.1vw;
        font-weight: bold;
        text-align: left;
        color: ${colors.title};
        position: relative;
        margin-left: 5vw;
        margin-right: 5vw;
        margin-top: 3vh;
        margin-bottom: 3vh;
        top: 5vh;
        
        


    `

    const Subtitle = styled.p`
        font-size: 1.5vw;
        font-weight: 500;
        text-align: center;
        color: ${colors.title};
        position: relative;
        margin-top: 2.3vh;
        text-decoration: none;


    `

    const Oval = styled.button`
        width: 15vw;
        height: 8vh;
        background: ${colors.lightBeige};
        border-radius: 50%;
        border: none;
        border-radius: 64px;
        position: relative;
        top: 20vh;
        margin-right: 60vw;
        padding: 10px 20px;
        display: inline-block;
        cursor: pointer;
        
      
    `
    return (
        // props.data.togglePage
        <Container>
            <TitleRect>
                <Title> 
                Summarize <br></br>
                in Seconds <br></br>
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

// onClick = {props.data.togglePage}
export default LandingBottom;
