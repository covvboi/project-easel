import React, { useState } from 'react';
import '../App.css';
import TextB from './TextB'
import NavbarB from './NavbarB'

function MainViewB() {

    return(
        <div>
            <NavbarB></NavbarB>
            <div className="container">    
            <TextB></TextB>
            </div>               
        </div>     
  )
}
export default MainViewB;


