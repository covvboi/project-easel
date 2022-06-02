import { Card, ListGroup } from 'react-bootstrap';
import '../App.css';

const CommentListC = ({commentc}) => {

    return (
        <div className="comment-bg">
            {commentc.map(commentsc => {
                return(<div className="comment-box">
                <Card style={{ width: '28rem' }}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>{commentsc.댓글}</ListGroup.Item>
                    </ListGroup>
                </Card>
                    
                </div>)
            })}
        </div>
    )
}

export default CommentListC;