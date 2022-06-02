import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TextListA from './TextListA'



const TextA = () => {
    const [texta,setTexta] = useState([]);
    // 비어있는 state를 만든다 [] 
    // 그다음 변경함수에 서버에서 가져온 데이터를 저장해서 꺼내사용해야함

    useEffect(()=>{                            //hook걸어주고
        axios.get('http://localhost:8080/view1')
        .then(result => {
            // console.log(result.data);
            setTexta(result.data);
            console.log(texta);
           
        });

    },[]);

    return(
        // 이건 fragments라는 문법인데 의미없는 <div>쓰기 싫을 때 사용가능함.
        // return()안에는 태그들이 평행하게 여러개 들어갈 수 없다.
        // 평행하게 어려개 태그를 쓰고싶다면 <div> 태그로 묶어야함 싫으면 위에 설명함.
        <>  
        <TextListA texta={texta}/>
       
        </>
    )
}

export default TextA;