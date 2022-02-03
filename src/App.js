import React, { useState } from 'react';
import { Button,Navbar,Nav,NavDropdown,Form,FormControl,Container,Offcanvas, CloseButton } from 'react-bootstrap';
import styled from 'styled-components'
import './App.css';
import Register from './Register.js';

import { Link, Route, Switch } from 'react-router-dom';



function App() {

  let [modal, modalCh] = useState(false);   //modal창의 on off 스위치의 역할인 state


  return (
    <div className="App">
           {/* 리엑트라우터는 겹치는 페이지 다 보여준다 그러니까 exapt 써줘야 됌 */}
     <Route exact path="/">  
    
            {
              modal === true
              ? <LoginModal modalCh={modalCh} ></LoginModal>
              : null
            } 


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
                <Nav.Link href="#action1"><span onClick={()=>{modalCh(true)}}><Button className="btn-size" variant="outline-secondary">로그인</Button></span></Nav.Link>
                <Nav.Link href="#action2"><Link to="/register"><Button className="btn-size" variant="outline-secondary">EASEL 회원가입</Button></Link></Nav.Link>
                <a className="find-pw">아이디/비밀번호찾기</a>

                {/* Drop down menu */}
                {/* <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown> */}

              </Nav>
                &nbsp;
                {/* <hr></hr>  나중에 이거 지우자*/}
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
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      {/* <LoginModal></LoginModal> */}


     </Route>


     <Route path="/register">
       <Register/>
     </Route>



    </div>
  );
}




function LoginModal(props){
  return(
    <div className="black-login">
    <div className="white-login">
    <span onClick={()=>{props.modalCh(false)}}><CloseButton className="close-button"/></span>
      <h2>Sign Up</h2>
      &nbsp;
      <FormControl
        type="search"
        placeholder="ID"
        className="ID-8" 
      />
      &nbsp;
      <FormControl
        type="search"
        placeholder="PW"
        className="PW-9"
      />
      <input className="remem-id" type="checkbox"></input>
      <Button className="login-button" variant="secondary">submit</Button>
      <a className="id-remem">아이디 저장</a>
      
    </div>
    </div>
  )
}

export default App;
