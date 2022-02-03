import React, { useState } from 'react';
import { Button,Navbar,Nav,NavDropdown,Form,FormControl,Container,Offcanvas, CloseButton } from 'react-bootstrap';
import styled from 'styled-components'


function Register(){
    return(
        <div className="bg-regist">
        <div className="white-regist">
          <h4>회원정보</h4>
            <a className="regist-text-styled">아이디</a>
            <a className="regist-text-styled2">영문,숫자,4~20자</a>
            <FormControl
            type="search"
            placeholder="id"
            className="ID-1" 
            />
            &nbsp;
            
            <a className="regist-text-styled">비밀번호</a>
            <a className="regist-text-styled2">영문,숫자,특문이 조합된 8~20자</a>
            <FormControl
            type="search"
            placeholder="pw"
            className="PW-1" 
            />
            
            <FormControl
            type="search"
            placeholder="pw"
            className="PW-2" 
            />
            
            &nbsp;
            <a className="regist-text-styled">이메일</a>
            <a className="regist-text-styled2">아이디/비밀번호 찾기에 필요</a>
            <FormControl
            type="search"
            placeholder="이메일"
            className="EMAIL" 
            />
            &nbsp;
            <a className="regist-text-styled">닉네임</a>
            <a className="regist-text-styled2">SNS 활동에 필요</a>
            <FormControl
            type="search"
            placeholder="닉네임"
            className="NICKNAME" 
            />
            <div className="d-grid gap-2">
              <Button variant="secondary" size="lg">회원가입</Button>
            </div>
      </div>
      </div>
    )
  }

  export default Register;