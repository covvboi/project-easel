import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CommentListA from './CommentListA';
import { useParams } from 'react-router-dom';

const CommentA = () => {
    const [commenta,setCommenta] = useState([]);
    let { id } = useParams();

    useEffect(()=>{                            //hook걸어주고
        axios.get('http://localhost:8080/commentview1/' + id)
        .then(result => {
            console.log(result.data);
            setCommenta(result.data);
        });
    },[]);

    return(
   
    <>
        <CommentListA commenta={commenta}/>
    </>
    
    )
}

export default CommentA;