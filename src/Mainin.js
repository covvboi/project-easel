import React, { useState,useEffect } from 'react';
import { Button, Navbar, Nav, Card, ListGroup, Form, FormControl, Container, Offcanvas, Alert} from 'react-bootstrap';
import NowUser from './component1/NowUser';

import './App.css';


function Mainin() {

    let [Modal, setModal] = useState(false);   //modal창의 on off 스위치의 역할인 state

    return(
        <div>

            <Navbar className="navbar" bg="whight" expand={false}>
                <Container fluid>
                <Navbar.Brand href="#">EASEL</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                    <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="offcanvasNavbarLabel">EASEL</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      
                  
                    <Alert variant="success">
                    <Alert.Heading>Hello, ;)</Alert.Heading>
                 
                    
                    <hr />
                    <NowUser></NowUser>
                    {/* <a className="find-pw">로그아웃</a> */}

                 
                    <Form action="logout" method="POST">
                    <Button className="logout-bt" variant="outline-success" size="sm" type="submit">로그아웃</Button>
                    </Form>

                    </Alert>


                  

                    </Nav>
                        &nbsp;
                        
                        <p className="style-1">우리학교 둘러보기</p>
                        
                    <Form className="d-flex">
                    
                        <FormControl
                        type="search"
                        placeholder="        찾으시는 캠퍼스를 검색하세요"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>

                    <Card className="college-list" style={{ width: '26rem' }}>
                        <ListGroup variant="flush">
                        <a className='list-href' href='/maina'> <ListGroup.Item>COLLEGE A</ListGroup.Item> </a>
                        <a className='list-href' href='/mainb'> <ListGroup.Item>COLLEGE B</ListGroup.Item> </a>
                        <a className='list-href' href='/mainc'> <ListGroup.Item>COLLEGE C</ListGroup.Item> </a>
                        </ListGroup>
                    </Card>

                    </Offcanvas.Body>
                </Navbar.Offcanvas>
                </Container>
            </Navbar>

        </div>
    )
}



export default Mainin;