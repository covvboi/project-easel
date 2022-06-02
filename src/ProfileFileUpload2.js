import React, { useState } from 'react';
import Dropzone from 'react-dropzone'
import {useDropzone} from 'react-dropzone'

function ProfileFileUpload2() {

    const [files,setFiles] = useState([])

    const {getRootProps, getInputProps} = useDropzone({
        accept: "image/*",
        onDrop: (acceptedFiles) =>{
            setFiles(
                acceptedFiles.map((file) => Object.assign(file, {
                    preview: URL.createObjectURL(file)
                }))
            )
        }
    })

    const images = files.map((file) => (
        <div key={file.name}>
            <div>
                {/* <input type="file" name="프로필"></input> */}
                <img  src={file.preview} alt="preview" className="reg-profile " ></img>
            </div>
        </div>
    ))

    return(
        <div>
            <div {...getRootProps()}>

               {/* <input type='file' name="프로필"/>   */}

               <input {...getInputProps()} name='프로필'/>
           
               <p style={{textAlign : 'center', color :'grey' , padding : '30px'}}>Click to upload Profile</p>

            </div>
           <div>{images}</div>
        </div>
    )
}

export default ProfileFileUpload2;