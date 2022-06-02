import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CommentListC from './CommentListC';
import { useParams } from 'react-router-dom';

const CommentC = () => {
    const [commentc,setCommentc] = useState([]);
    let { id } = useParams();

    useEffect(()=>{                            //hook걸어주고
        axios.get('http://localhost:8080/commentview3/' + id)
        .then(result => {
            console.log(result.data);
            setCommentc(result.data);
        });
    },[]);

    return(
   
    <>
        <CommentListC commentc={commentc}/>
    </>
    
    )
}

export default CommentC;