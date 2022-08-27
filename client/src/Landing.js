import { useState } from 'react';
import Nav from './Nav';
import landingBottom from './landingBottom';
import './Landing.css';

function Landing (){
    return (
        <div className='Landing-Wrapper'>
            <Nav/>
            <LandingBottom/>
        </div>
    );
}
export default Landing;