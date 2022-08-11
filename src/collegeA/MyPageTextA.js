import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MyPageTextListA from './MyPageTextListA'
import { Button, Card, ListGroup } from 'react-bootstrap';

const MyPageTextA = () => {
    const [mypagea,setMypagea] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8080/mypageview1')
        .then(result => {
            setMypagea(result.data);
        })
    },[]);

    return(
        <>
        <MyPageTextListA mypagea={mypagea}/>
        </>
    )
}

export default MyPageTextA;