import React, { useState } from 'react';
import EditPageC from './EditPageC'
import NavbarC from './NavbarC'
import '../App.css';

function EditC() {

    return(
        <div>
            <NavbarC></NavbarC>
            <div className="container">          
            <EditPageC></EditPageC>
            </div>               
        </div>     
  )
}

export default EditC;


