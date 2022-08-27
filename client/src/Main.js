import { useState } from 'react';
import styled from 'styled-components';
import theme from './styles/theme';
import './Main.css';
import gitLogo from './images/gitLogo.png';


function Main (){
    const colors = theme.colors;
    const Container = styled.div`
        background-color: ${colors.lightBeige};
        height: 1080px;

    `;

    const Dropbox = styled.div`
        position: relative;
        height: 500px;
        width: 500px;
        top: 300px;
        left: 150px;
        background-color: #FFFFFF; 
    `

    const Footer = styled.div`
        height: 75px;
        background-color: ${colors.mocha};
        text-align: center;
        position: relative;
        bottom: 0px;
    `
    const Logo = styled.div `
        float:left;
        background-image: url(${props => props.img});
        width:60px;
        height: 60px;
        margin: 10px;
        background-repeat: no-repeat;
        background-size: 100% 100%;
    `;
    return (
        <body>
            <Container>
                <Dropbox>
                    <h1 font-size= "10px">
                        dropbox
                    </h1>
                </Dropbox>
                
            </Container>
            <Footer>
                <Logo img = {gitLogo}>

                </Logo>
            </Footer>
        </body>
    );
}
export default Main;