import React, { useState } from 'react';
import '../App.css';
import TextA from './TextA'
import NavbarA from './NavbarA'

function MainViewA() {

    return(
        <div>
            <NavbarA></NavbarA>
            <div className="container">    
            <TextA></TextA>
            </div>               
        </div>     
  )
}
export default MainViewA;


