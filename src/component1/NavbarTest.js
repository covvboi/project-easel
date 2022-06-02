import React, { useEffect, useState } from 'react';
import { Button,Navbar,Nav,NavDropdown,Form,FormControl,Container,Offcanvas, CloseButton, Card, Placeholder, ListGroup } from 'react-bootstrap';

function NavbarTest() {
    return(
        <div>
            <Navbar bg="whight" expand={false}>
            <Container fluid>
                <Navbar.Brand href="/">EASEL</Navbar.Brand>
            
            <span>
                <a href="/mypage">
                <img className="user-icon" src="imgfile/user.png"></img>
                </a>

                <a href="/post">
                <img className="post-icon" src="imgfile/post.png"></img>
                </a>

            </span>
            </Container>
            </Navbar>
        </div>
    )
}

export default NavbarTest;