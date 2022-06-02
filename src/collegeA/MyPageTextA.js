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
      
        {/* <div className="my-card-body">
        <div className="my-text-box" style={{ width: '63rem' }}>    
            <ListGroup.Item>

                <p>발행번호</p>
                <div className="my-btn">
                <Button size="sm" variant="secondary">수정하기</Button>
                &nbsp;
                <Button size="sm" variant="danger">삭제</Button>
                </div>
                <hr />
                <h4 className="my-text">작품명</h4>
                <p>zzzzzzzzzzdfasfeasfseafse</p>
                <h4 className="my-text">작품설명</h4>
                <p>zzzzzzzzzzdfasfeasfseafse</p>
                <h4 className="my-text">작가한마디</h4>
                <p>zzzzzzzzzzdfasfeasfseafse</p>
                        
                <div className="my-main-view"> 
                 <Card style={{ width: '16rem' }} >
                 <Card.Img variant="top" src='image/${textlistimg}'/>
                 </Card>
                </div>

            </ListGroup.Item>
         </div>
         </div> */}
         
        </>
    )
}

export default MyPageTextA;