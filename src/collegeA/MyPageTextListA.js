import { Button, Card, ListGroup } from 'react-bootstrap';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import '../App.css';

const MyPageTextListA = ({mypagea}) => {

    let { id } = useParams();

return (
    <div>
    {mypagea.map(mypagelist =>{
        return(<div className="my-card-body">

        <div className="my-text" style={{ width: '63rem' }}>    
        <ListGroup.Item>
            <p>발행번호 {mypagelist._id} </p>
                   
              <div className="my-btn">

                <Link to={`/edit1/${mypagelist._id}`}> 

                    <Button size="sm" variant="secondary" onClick={()=>{
                                                
                    axios.get('http://localhost:8080/mypageview1/'+ id )
                    .then(()=>{
                            console.log('get');
                    })
                    }}>수정하기</Button>

                </Link>

                &nbsp;

                <Button size="sm" data-id={mypagelist._id} variant="danger" onClick={()=>{
                    window.location.reload();
                    axios.delete('http://localhost:8080/mypageview1',{data: {_id : mypagelist._id}})
                    .then(()=>{
                    console.log('삭제 성공');
                    })
                    .catch((xhr, textStatus, errorThrown)=>{
                    console.log('삭제 실패');
                    console.log(xhr, textStatus, errorThrown);
                    })
                    }}>삭제</Button>
 
              </div>

                    <hr/>
                    <h4 className="my-text">작품명</h4>
                    {mypagelist.작품명}
                    <h4 className="my-text">작품설명</h4>
                    {mypagelist.작가한마디}
                    <h4 className="my-text">작가한마디</h4>
                    {mypagelist.작품설명}
                    
                    <div className="my-main-view">
                        <Card style={{ width: '16rem' }}>
                            <Card.Img variant="top" src={`image/${mypagelist.img}`}/>
                        </Card>
                    </div>

            </ListGroup.Item>
            </div>
        </div>)
        })}
    </div>
    )
}

export default MyPageTextListA;