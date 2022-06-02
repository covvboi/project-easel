import { Card, ListGroup } from 'react-bootstrap';
import '../App.css';

const CommentListB = ({commentb}) => {

    return (
        <div className="comment-bg">
            {commentb.map(commentbs => {
                return(<div className="comment-box">
                <Card style={{ width: '28rem' }}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>{commentbs.댓글}</ListGroup.Item>
                    </ListGroup>
                </Card>
                    
                </div>)
            })}
        </div>
    )
}

export default CommentListB;