import React, { useState } from 'react';
import { Button,Form,Modal } from 'react-bootstrap';
import ProfileFileUpload2 from './ProfileFileUpload2';
import './App.css';


function Register(){
    return(
        <div className="bg-regist">
        <div className="white-regist">
          <h4>회원정보</h4>

          <Form action="/add/2" method="POST" encType="multipart/form-data">

      
          <ProfileFileUpload2></ProfileFileUpload2>

            <a href="#!" className="regist-text-styled">아이디</a>
            <a className="regist-text-styled2">영문,숫자,4~20자</a>
            <Form.Control
            type="text"
            placeholder="id"
            className="ID-1" 
            name="id"
            />
            &nbsp;
            
            <a className="regist-text-styled">비밀번호</a>
            <a className="regist-text-styled2">영문,숫자,특문이 조합된 8~20자</a>
            <Form.Control
            type="text"
            placeholder="pw"
            className="PW-1" 
            name="pw"
            />
            
            <Form.Control
            type="password"
            placeholder="pw"
            className="PW-2" 
            />
            
            &nbsp;
            <a className="regist-text-styled">이메일</a>
            <a className="regist-text-styled2">아이디/비밀번호 찾기에 필요</a>
            <Form.Control
            type="search"
            placeholder="이메일"
            className="EMAIL" 
            name="email"
            />
            &nbsp;
            <a className="regist-text-styled">닉네임</a>
            <a className="regist-text-styled2">SNS 활동에 필요</a>
            <Form.Control
            type="search"
            placeholder="닉네임"
            className="NICKNAME" 
            name="nickname"
            />
            <div className="d-grid gap-2">
              <Button type="submit" variant="secondary" size="lg" >
                회원가입</Button>
            </div>

            </Form>
            <a className="regist-back" href='/'>뒤로가기</a>
      </div>
      </div>
    )
  }






  export default Register;