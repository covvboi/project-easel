import CommentB from './CommentB';
import NavbarB from './NavbarB'
import '../App.css';

function CommentPageB() {
   
    return (
     <div>
        <NavbarB></NavbarB>
          <h4 className="comment-head">댓글</h4>
        <CommentB></CommentB>
    </div>      
    );
  }
  
export default CommentPageB;
