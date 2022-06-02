import React, { useEffect, useState } from 'react';
import {  Card } from 'react-bootstrap';

const UserImglist = ({img}) => {
    return(
        <div>
       
          <Card.Img variant="top" className="proimg-box" src={`image/${img.userimg}`} />

        </div>
    )
}

export default UserImglist;