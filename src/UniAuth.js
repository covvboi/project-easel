import React, { useEffect, useState } from 'react';
import { Button,Form } from 'react-bootstrap';
import NavbarTest from './component1/NavbarTest';
import axios from 'axios';
import './App.css';


function UniAuth() {

    // const [user,setUser] = useState([]);

    // useEffect(()=>{
    //     axios.get('http://localhost:8080/userinfo')
    //     .then(response => {
    //         console.log(response.data);
    //         setUser(response.data);
    //     })
    // },[]);

    const [email, setEmail] = useState('');
    const [innum, setInnum] = useState('');

    // input창에 입력을 할수있게 해주는 코드 //
    const handleClick = (e) => {
        e.preventDefault();

        if(e.target.id === 'email') {
            setEmail(e.target.value)
        }else{
            setInnum(e.target.value)    
        } 
    }
    ////////////////////////////////////

    const handleSubmit = (e) => {
        e.preventDefault();

        const dataToSubmit = {
            email
        }
        axios.post("http://localhost:8080/uniin", dataToSubmit)
    }

    const checkButton = (e) => {
        e.preventDefault();

        const dataToSubmit = {
            innum
        }
        axios.post("http://localhost:8080/uniin", dataToSubmit)
      
    }

return(
<div>
    <NavbarTest></NavbarTest>
 <div className="uni-box">
    <h4>대학교 인증</h4>
    <a className="regist-text-styled">이메일</a>
   
            <Form onSubmit="handleSubmit">

                <Form.Control
                type="text"
                id="email"
                value={email}
                placeholder="학교 이메일을 입력해주세요"
                className="uni-email" 
                name="email"
                onChange={handleClick}
                />
                <a className="regist-text-styled3">작성하신 이메일로 인증번호가 발송됩니다.</a>

                <Button type="submit" className="btn-5" variant="outline-secondary" onClick={handleSubmit}>인증번호 발송</Button>

            </Form>  

            {/* <Form onSubmit="checkButton" action="/uniin?_method=PUT" method="POST"> */}
      
            <Form.Control
            type="text"
            placeholder="인증번호를 입력해주세요"
            className="uni-in" 
            name="innum"
            id="innum"
            onChange={handleClick}
            />
           {/* <input value={user.userin}></input> */}
           <Button className="btn-6" variant="outline-secondary" onClick={checkButton}>인증완료</Button>
           

            {/* </Form>  */}
  
 </div>

</div>
    )
}

export default UniAuth;