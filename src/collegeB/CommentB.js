import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CommentListB from './CommentListB';
import { useParams } from 'react-router-dom';

const CommentB = () => {
    const [commentb,setCommentb] = useState([]);
    let { id } = useParams();

    useEffect(()=>{                            //hook걸어주고
        axios.get('http://localhost:8080/commentview2/' + id)
        .then(result => {
            console.log(result.data);
            setCommentb(result.data);
        });
    },[]);

    return(
   
    <>
        <CommentListB commentb={commentb}/>
    </>
    
    )
}

export default CommentB;