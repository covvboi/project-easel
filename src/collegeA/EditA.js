import React, { useState } from 'react';
import EditPageA from './EditPageA'
import NavbarA from './NavbarA'
import '../App.css';

function EditA() {

    return(
        <div>
            <NavbarA></NavbarA>
            <div className="container">          
            <EditPageA></EditPageA>
            </div>               
        </div>     
  )
}

export default EditA;


