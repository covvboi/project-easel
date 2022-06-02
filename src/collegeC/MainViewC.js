import React, { useState } from 'react';
import '../App.css';
import TextC from './TextC'
import NavbarC from './NavbarC'

function MainViewC() {

    return(
        <div>
            <NavbarC></NavbarC>
            <div className="container">    
            <TextC></TextC>
            </div>               
        </div>     
  )
}
export default MainViewC;


