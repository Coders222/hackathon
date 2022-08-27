import { useState } from 'react';
import styled from 'styled-components/macro';
import theme from './styles/theme';

const {colors} = theme;
function Nav (){
    const Container = styled.nav `
        min-width : 100vw;
        height:75px;
        background-color: ${colors.lightBeige};
    `;
    const GitLogo = styled.div `
        width: 50px;
        height = 50px;
    `;
    return (
        <Container>
            <GitLogo>
                <img src='./images/gitLogo.png'>

                </img>
            </GitLogo>
        </Container>
    );
}

export default Nav;