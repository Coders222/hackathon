import { useState } from 'react';
import styled from 'styled-components/macro';
import theme from './styles/theme';
import gitLogo from './images/gitLogo.png';

const {colors} = theme;
function Nav (){
    const Container = styled.nav `
        width : 99.2vw;
        height: 7vh;
        background-color: ${colors.lightBeige};
        text-align:center;
 
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
        margin-right: 1.2vw;
    `;
    const Menu = styled.ul`
        float:right;
        display:flex;
        flex-direction:row;
        margin-right:25px;
        list-style:none;
    `;
    const MenuItem = styled.li`
        float:right;
        color:#000000;
        width:3vw;
        height:5vh;
        margin-left:1vw;
        font-size: 1.3vh;
        margin-right: 1.5vw;
        margin-top: 0.2vh;
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
                <MenuItem>
                    <Contain>
                        <h2>Contact</h2>
                    </Contain>
                </MenuItem>
            </Menu>
        </Container>
    );
}

export default Nav;