import React, { useEffect, useState } from 'react';
import { Navbar, Container } from 'react-bootstrap';

function NavbarB() {
    return(
        <div>
            <Navbar bg="whight" expand={false}>
            <Container fluid>
                <Navbar.Brand href="/mainin">EASEL</Navbar.Brand>
            
            <span>
                <a href="/mypageb">
                <img className="user-icon" src="/imgfile/user.png"></img>
                </a>

                <a href="/postb">
                <img className="post-icon" src="/imgfile/post.png"></img>
                </a>

            </span>
            </Container>
            </Navbar>
        </div>
    )
}

export default NavbarB;