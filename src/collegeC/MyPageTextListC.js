import { Button, Card, ListGroup } from 'react-bootstrap';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import '../App.css';

const MyPageTextListC = ({mypagec}) => {

    let { id } = useParams();

return (
    <div>
    {mypagec.map(mypagelistc =>{
        return(<div className="my-card-body">

        <div className="my-text" style={{ width: '63rem' }}>    
        <ListGroup.Item>
            <p>발행번호 {mypagelistc._id} </p>
                   
              <div className="my-btn">

                <Link to={`/edit3/${mypagelistc._id}`}> 

                    <Button size="sm" variant="secondary" onClick={()=>{
                                                
                    axios.get('http://localhost:8080/mypageview3/'+ id )
                    .then(()=>{
                            console.log('get');
                    })
                    }}>수정하기</Button>

                </Link>

                &nbsp;

                <Button size="sm" data-id={mypagelistc._id} variant="danger" onClick={()=>{
                    window.location.reload();
                    axios.delete('http://localhost:8080/mypageview3',{data: {_id : mypagelistc._id}})
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
                    {mypagelistc.작품명}
                    <h4 className="my-text">작품설명</h4>
                    {mypagelistc.작가한마디}
                    <h4 className="my-text">작가한마디</h4>
                    {mypagelistc.작품설명}
                    
                    <div className="my-main-view">
                        <Card style={{ width: '16rem' }}>
                            <Card.Img variant="top" src={`image/${mypagelistc.img}`}/>
                        </Card>
                    </div>

            </ListGroup.Item>
            </div>
        </div>)
        })}
    </div>
    )
}

export default MyPageTextListC;