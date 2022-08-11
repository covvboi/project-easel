import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Userlist from './Userlist'
// import UniAuth from '../UniAuth'

const NowUser = () => {

    const [user,setUser] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8080/userinfo')
        .then(result => {
            setUser(result.data)
            console.log('응답성공');
            console.log(user);
        })
        
    },[])
    
    return(
        
     <>
     <Userlist user={user}/>
     {/* <h4>test id</h4> */}
     {/* <UniAuth user={user}/> */}
     
     </>

    )
}

export default NowUser;