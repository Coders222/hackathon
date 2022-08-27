import { useState } from 'react';
import styled from 'styled-components';
import theme from './styles/theme';
import './Main.css';

function Main (){
    const colors = theme.colors;
    const Container = styled.div`
        background-color: ${colors.lightBeige};

    `;
    return (
        <Container>
            
        </Container>
    );
}
export default Main;