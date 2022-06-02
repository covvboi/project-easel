import React, { useEffect, useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import '../App.css';

const CommentListA = ({commenta}) => {

    return (
        <div className="comment-bg">
            {commenta.map(commentsa => {
                return(<div className="comment-box">
                <Card style={{ width: '28rem' }}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>{commentsa.댓글}</ListGroup.Item>
                    </ListGroup>
                </Card>
                    
                </div>)
            })}
        </div>
    )
}

export default CommentListA;