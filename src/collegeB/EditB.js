import React, { useState } from 'react';
import EditPageB from './EditPageB'
import NavbarB from './NavbarB'
import '../App.css';

function EditB() {

    return(
        <div>
            <NavbarB></NavbarB>
            <div className="container">          
            <EditPageB></EditPageB>
            </div>               
        </div>     
  )
}

export default EditB;


