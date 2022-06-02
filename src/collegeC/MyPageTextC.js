import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MyPageTextListC from './MyPageTextListC'


const MyPageTextC = () => {
    const [mypagec,setMypagec] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8080/mypageview3')
        .then(result => {
            setMypagec(result.data);
        })
    },[]);

    return(
        <>
        <MyPageTextListC mypagec={mypagec}/>
        </>
    )
}

export default MyPageTextC;