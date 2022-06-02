import React, { useEffect, useState } from 'react';
import { Button,Navbar,Nav,NavDropdown,Form,FormControl,Container,Offcanvas, CloseButton, Card, Placeholder, ListGroup } from 'react-bootstrap';


function Likebtn() {

  let [좋아요, 좋아요변경] = useState(0);

  return(
    <>
     {/* <Container className="profile-box"> */}
   
                
     <span className="id-box2" onClick={()=>{ 좋아요변경(좋아요 + 1) } }><img className="heart-icon" src="imgfile/heart.png"></img> {좋아요} 개  </span> 
                
     
      {/* </Container>  */}
    </>
  )
}

export default Likebtn;