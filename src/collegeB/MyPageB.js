import React, { useState } from 'react';
import { Button, ButtonGroup, Form, Modal } from 'react-bootstrap';
import '../App.css';
import NavbarB from './NavbarB';
import MyPageTextB from './MyPageTextB'
import NowUser from '../component1/NowUser';
import NowUserImg from '../component1/NowUserImg';
import ProfileFileUpload from '../ProfileFileUpload'

function MyPageB() {
    return(
  <div>
    <NavbarB></NavbarB>
      <div className="my-page-box">
   
          <NowUserImg></NowUserImg>
     
          <div className="mypage-text">     
              <div className="mypage-user-id">
                <NowUser></NowUser>
              </div>
      
              <ButtonGroup vertical className="mypage-text-blue">
              <ProfileChange/>
              <Button variant="link">닉네임 변경</Button>
              <Button variant="link">비밀번호 변경</Button>
              </ButtonGroup>

              <Form action="logout" method="POST">
              <Button variant="link" className="mypage-text-red" type="submit">로그아웃</Button>
              </Form>
              
              <Button className="school-auth-button" variant="outline-secondary" size="sm" href="/uniin">학교인증하기</Button>

                <div className="container">
                  <MyPageTextB></MyPageTextB>
                </div>
           </div>
       </div>
   </div>
    )
}

function ProfileChange() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="link" onClick={handleShow}>
          프로필사진 설정
        </Button>
  
        <Modal show={show} onHide={handleClose}>

          <Modal.Header closeButton>
            <Modal.Title>프로필 변경</Modal.Title>
          </Modal.Header>

            <Form action="/edit1?_method=PUT" method="POST" encType="multipart/form-data">

              <Modal.Body>  
              <ProfileFileUpload></ProfileFileUpload>
              </Modal.Body>

              <Modal.Footer>

                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>

                <Button type="submit" variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>

              </Modal.Footer>
            </Form>

        </Modal>
      </>
    );
  }
  
export default MyPageB;