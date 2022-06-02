import { Button, Form } from 'react-bootstrap';
import { Input } from 'reactstrap';    
import NavbarC from './NavbarC';
import FileUpload from '../component1/FileUpload'
import '../App.css';

function PostC() {
         
    return(
      <div className="post">

        <NavbarC></NavbarC>
    
        <Form style={{ maxWidth:'600px', margin:'2rem auto'}}>
          <Form action="/add3" method="POST" style={{textAlign:'center'}} encType="multipart/form-data">

                  <FileUpload className="drip-box"></FileUpload>
             
                  <Form.Group className="work-name">
                    <Form.Label style={{float:'left'}}>작품명</Form.Label>
                    <Input name="title" placeholder="작품명을 작성해주세요..." type='text'> </Input>
                  </Form.Group>

                  <Form.Group className="work-explain">
                    <Form.Label style={{float:'left'}}>작품설명</Form.Label>
                    <Form.Control name="explain" placeholder="작품설명을 작성해주세요..." as="textarea" rows={4} />
                  </Form.Group>

                  <Form.Group className="author-talk">
                    <Form.Label style={{float:'left'}}>작가한마디</Form.Label>
                    <Form.Control name="comment" placeholder="작가 한마디를 작성해주세요..." as="textarea" rows={2} />
                  </Form.Group>
                  
       
                  <Button type="submit" className="post-button" variant="secondary">게시하기</Button>
             
           </Form>
        </Form>     

     </div>
   )
}


export default PostC;