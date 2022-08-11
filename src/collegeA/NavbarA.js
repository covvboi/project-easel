import React, { useEffect, useState } from 'react';
import { Button,Navbar,Nav,Container } from 'react-bootstrap';

function NavbarA() {
    return(
        <div>
            <Navbar bg="whight" expand={false}>
            <Container fluid>
                <Navbar.Brand href="/mainin">EASEL</Navbar.Brand>
            
            <span>
                <a href="/mypagea">
                <img className="user-icon" src="/imgfile/user.png"></img>
                </a>

                <a href="/posta">
                <img className="post-icon" src="/imgfile/post.png"></img>
                </a>

            </span>
            </Container>
            </Navbar>
        </div>
    )
}

export default NavbarA;