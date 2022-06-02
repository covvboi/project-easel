import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MyPageTextListB from './MyPageTextListB'


const MyPageTextB = () => {
    const [mypageb,setMypageb] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8080/mypageview2')
        .then(result => {
            setMypageb(result.data);
        })
    },[]);

    return(
        <>
        <MyPageTextListB mypageb={mypageb}/>
        </>
    )
}

export default MyPageTextB;