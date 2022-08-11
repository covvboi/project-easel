import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import { Button, Navbar, Nav, Form, FormControl, Container, Offcanvas, CloseButton } from 'react-bootstrap';
import './App.css';

import Mainin from './Mainin';

import Register from './Register.js';

/////////////////////////////////////////////// Post 
import PostA from './collegeA/PostA.js';
import PostB from './collegeB/PostB.js';
import PostC from './collegeC/PostC.js';
//////////////////////////////////////////////  

///////////////////////////////////////////////  
import MainViewA from './collegeA/MainViewA.js';
import MainViewB from './collegeB/MainViewB.js';
import MainViewC from './collegeC/MainViewC.js';
/////////////////////////////////////////////// 

//////////////////////////////////////////////
import EditA from './collegeA/EditA'
import EditB from './collegeB/EditB'
import EditC from './collegeC/EditC'
//////////////////////////////////////////////

//////////////////////////////////////////////
import CommentPageA from './collegeA/CommentPageA'
import CommentPageB from './collegeB/CommentPageB'
import CommentPageC from './collegeC/CommentPageC'
//////////////////////////////////////////////


import MyPageA from './collegeA/MyPageA';
import MyPageB from './collegeB/MyPageB';
import MyPageC from './collegeC/MyPageC';



import UniAuth from './UniAuth';



function App() {

  let [Modal, setModal] = useState(false);   //modal창의 on off 스위치의 역할인 state


  return (
  <div className="App">
  {/* 리엑트라우터는 겹치는 페이지 다 보여준다 그러니까 exact 써줘야 됌 */}
  <Route exact path="/">  
    
            {
              Modal === true
              ? <LoginModal setModal={setModal} ></LoginModal>
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

                <Offcanvas.Body className="login-box">
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action1"><span onClick={()=>{setModal(true)}}><Button className="btn-size" variant="outline-secondary">로그인</Button></span></Nav.Link>
                    <Nav.Link href="#action2"><Link to="/register"><Button className="btn-size" variant="outline-secondary">EASEL 회원가입</Button></Link></Nav.Link>
                    <a className="find-pw">아이디/비밀번호찾기</a>

                  </Nav>
                    &nbsp;
                    
                </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>      

      <h4 className="main-text-1">EASEL</h4>
  </Route>

     <Route path="/mainin">
        <Mainin/>
     </Route>


     <Route path="/register">
       <Register/>
     </Route>


    

     <Route path="/posta">
       <PostA/>
     </Route>

     <Route path="/postb">
       <PostB/>
     </Route>

     <Route path="/postc">
       <PostC/>
     </Route>




   
   
     <Route path="/maina">
       <MainViewA/>
     </Route>

     <Route path="/mainb">
       <MainViewB/>
     </Route>

     <Route path="/mainc">
       <MainViewC/>
     </Route>



     <Route path="/edit1/:id">
       <EditA/>
     </Route>

     <Route path="/edit2/:id">
       <EditB/>
     </Route>

     <Route path="/edit3/:id">
       <EditC/>
     </Route>




     <Route path="/commentview1/:id">
       <CommentPageA/>
     </Route>

     <Route path="/commentview2/:id">
       <CommentPageB/>
     </Route>

     <Route path="/commentview3/:id">
       <CommentPageC/>
     </Route>




     <Route path="/mypagea">
       <MyPageA/>
     </Route>

     <Route path="/mypageb">
       <MyPageB/>
     </Route>

     <Route path="/mypagec">
       <MyPageC/>
     </Route>





     <Route path="/uniin">
       <UniAuth/>
     </Route>





     
    </div>
  );
}


function LoginModal(props){
  return(
    <div className="black-login">
    <div className="white-login">
    <span onClick={()=>{props.setModal(false)}}><CloseButton className="close-button"/></span>
      <h2>Sign In</h2>

      <Form action="/login" method="POST">
      &nbsp;
      <FormControl
        type="text"
        placeholder="ID"
        className="ID-8" 
        name="id"
      />
      &nbsp;
      <FormControl
        type="text"
        placeholder="PW"
        className="PW-9"
        name="pw"
      />
      <input className="remem-id" type="checkbox"></input>
      <Button type="submit" className="login-button" variant="secondary">submit</Button>
      <a className="id-remem">아이디 저장</a>
      </Form>

    </div>
    </div>
  )
}

export default App;
