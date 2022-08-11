import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Button,Form } from 'react-bootstrap';
import { Input } from 'reactstrap';  
import NavbarA from './NavbarA'


const EditPageA = () => {
    const [text,setText] = useState([]);
    const { id } = useParams();
    console.log(id);
    // 비어있는 state를 만든다 [] 
    // 그다음 변경함수에 db에서 가져온 데이터를 저장해서 꺼내사용해야함

    useEffect(()=>{                            //hook걸어주고
        axios.get('http://localhost:8080/mypageview1/' + id )
        .then(result => {
            // console.log(result.data);
            console.log(result.data);
            setText(result.data);
        });
    },[]);

    return(
      
        // 이건 fragments라는 문법인데 의미없는 <div>쓰기 싫을 때 사용가능함.
        // return()안에는 태그들이 평행하게 여러개 들어갈 수 없다.
        // 평행하게 여러 태그를 쓰고싶다면 <div> 태그로 묶어야함.
    <>  
    
<Form style={{ maxWidth:'600px', margin:'3rem auto'}}>

    <Form action="/edit1?_method=PUT" method="POST">
      <h4>UPDATE PAGE</h4>  
       <input name="id" className="post-num" value={text._id}></input>   

      <Form.Group className="work-name">
        <Form.Label>작품명 수정</Form.Label>
        <Input onChange={(e)=> setText(e.target.value)} name="title" value={text.작품명} type='text'> </Input>
      </Form.Group>

      <Form.Group className="work-explain">
        <Form.Label>작품설명 수정</Form.Label>
        <Form.Control onChange={(e)=> setText(e.target.value)} name="explain" value={text.작품설명} as="textarea" rows={4} />
      </Form.Group>

      <Form.Group className="author-talk">
        <Form.Label>작가한마디 수정</Form.Label>
        <Form.Control onChange={(e)=> setText(e.target.value)} name="comment" value={text.작가한마디} as="textarea" rows={2} />
      </Form.Group>

      <Button type="수정" className="post-button" variant="secondary">수정하기</Button>
    </Form>

</Form>

    </>
  )
}

export default EditPageA;