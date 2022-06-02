import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserImglist from './UserImglist'

const NowUserImg = () => {
    const [img,setImg] = useState([]);

    useEffect(()=> {
        axios.get('http://localhost:8080/userinfo')
        .then(response =>{
            setImg(response.data)
        })
   },[])



   return(
       <>
       <UserImglist img={img}/>
       </>
   )
}

export default NowUserImg;
