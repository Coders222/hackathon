import { useState } from 'react';
import styled from 'styled-components/macro';
import theme from './styles/theme';
import gitLogo from './images/gitLogo.png';

const {colors} = theme;
function Nav (){
    const Container = styled.nav `
        width : 100%;
        height: 7vh;
        background-color: ${colors.lightBeige};
        text-align:center;
        position: fixed;
        z-index:100;
    `;
    const Logo = styled.div `
        // border: 1px solid #000;
        float:right;
        background-image: url(${props => props.img});
        width:2vw;
        height: 3.5vh;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        margin-top: 1.8vh;
        margin-left: 96vw;
        position: fixed;
    `;
    const Menu = styled.ul`
        float:right;
        display:flex;
        flex-direction:row;
        margin-right:25px;
        list-style:none;
        position: fixed;
    `;
    const MenuItem = styled.li`
        float:right;
        color:#000000;
        width:3vw;
        height:5vh;
        font-size: 1.3vh;
        top: 1vh;
        margin-bottom: 0.3vh;
        margin-left: 84vw;
        position: fixed;
        
    `;

    const MenuItem2 = styled.li`
        float:right;
        color:#000000;
        width:3vw;
        height:5vh;
        font-size: 1.3vh;
        top: 1vh;
        margin-left: 89vw;
        position: fixed;
    `;

    const Contain = styled.div`
        display:flex;
        justify-content:center;
    `
    return (
        <Container>
            <Logo img = {gitLogo}/>
            <Menu>
                <MenuItem>
                    <Contain>
                        <h2>About</h2>
                    </Contain>
                </MenuItem>
                <MenuItem2>
                    <Contain>
                        <h2>Contact</h2>
                    </Contain>
                </MenuItem2>
            </Menu>
        </Container>
    );
}

export default Nav;