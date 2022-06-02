import CommentC from './CommentC';
import NavbarC from './NavbarC'
import '../App.css';

function CommentPageC() {
   
    return (
     <div>
        <NavbarC></NavbarC>
          <h4 className="comment-head">댓글</h4>
        <CommentC></CommentC>
    </div>      
    );
  }
  
export default CommentPageC;
