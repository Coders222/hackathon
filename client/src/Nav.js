import { useState } from 'react';
import styled from 'styled-components/macro';
import theme from './styles/theme';
import gitLogo from './images/gitLogo.png';

const {colors} = theme;
function Nav (){
    const Container = styled.nav `
        min-width : 100vw;
        height:75px;
        background-color: ${colors.lightBeige};
        text-align:center;
        padding-right: 25px;
    `;
    const Logo = styled.div `
        // border: 1px solid #000;
        float:right;
        background-image: url(${props => props.img});
        width:60px;
        height: 60px;
        background-repeat: no-repeat;
        background-size: 100% 100%;
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
        width:100%;
        height:100%;
        margin-left:25px;
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