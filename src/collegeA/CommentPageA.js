import React, { useEffect, useState } from 'react';
import '../App.css';
import CommentA from './CommentA';
import NavbarA from './NavbarA'

function CommentPageA() {
   
    return (
     <div>
        <NavbarA></NavbarA>
          <h4 className="comment-head">댓글</h4>
        <CommentA></CommentA>
    </div>      
    );
  }
  
export default CommentPageA;
