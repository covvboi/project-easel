import React, { useState } from 'react';
import { Button, Form, FormControl, Container, Card, ListGroup } from 'react-bootstrap';
import Likebtn from '../component1/Likebtn';
import { Link, useParams } from 'react-router-dom';
import '../App.css';


const TextListA = ({texta}) => {
    
let { id } = useParams();
  return (
    <div className="main-text">

        {texta.map(textlist =>{
          return(<div>    
            <div className="card-body" style={{ width: '63rem' }}>     

               <ListGroup.Item>
                  <p>글번호</p>
                  {textlist._id}
                  <h4>작품명</h4>
                  {textlist.작품명}
                  <h4>작품설명</h4>
                  {textlist.작가한마디}
                  <h4>작가한마디</h4>
                  {textlist.작품설명}

                  <div className="main-view">
                      <Card style={{ width: '28rem' }}>
                
                        <Card.Img variant="top" src={`image/${textlist.img}`}/>
                          
                      </Card>
                  </div>

            <Container className="profile-box">
                <div className="id-box1">
                   {textlist.nownickname}
                </div>

                <div>
                  <img className="profile-img" src={`image/${textlist.nowimg}`}></img>
                  <Likebtn></Likebtn>
                </div>  
            </Container> 

        <hr />
        <Form className="d-flex" action='/comment1' method="POST">

          <input name="postnum" className="post-num" value={textlist._id}></input>
          <FormControl
          name="comments"
          className="comment-from"
          placeholder="댓글 달기" 
          />
          
        &nbsp;

        <Button type='submit' variant="secondary">submit</Button>
        </Form>
        
        
        <hr />

        <Link to={`/commentview1/${textlist._id}`}> 
          <Button variant="link" className="comment-from1"> 댓글 보기... </Button>
        </Link>

          


                  
            
                 </ListGroup.Item>
                </div>
            </div>)
          })}
    </div>
  )
}

export default TextListA;