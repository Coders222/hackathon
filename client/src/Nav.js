import { useState } from 'react';
import styled from 'styled-components/macro';
import theme from './styles/theme';

const {colors} = theme;
function Nav (){
    const Container = styled.nav `
        min-width : 100vw;
        height:50px;
        background-color: ${colors.lightBeige};
    `;
    return (
        <Container>
            
        </Container>
    );
}

export default Nav;