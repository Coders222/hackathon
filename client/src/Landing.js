import { useState } from 'react';
import Nav from './Nav';
import LandingBottom from './LandingBottom';
import './Landing.css';

function Landing (props){
    return (
        <div className='Landing-Wrapper'>
            <Nav/>
            <LandingBottom data={props.data}/>
        </div>
    );
}
export default Landing;