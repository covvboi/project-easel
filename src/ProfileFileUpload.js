import React, { useState } from 'react';
import Dropzone from 'react-dropzone'
import {useDropzone} from 'react-dropzone'



function ProfileFileUpload() {

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
                <img  src={file.preview} alt="preview" className="my-profile" ></img>
            </div>
        </div>
    ))

    return(
        <div>
            <div {...getRootProps()}>

               {/* <input type='file' name="프로필"/>   */}
              
               <input {...getInputProps()} name='프로필'/>

               <p style={{textAlign : 'center'}}>Click to upload</p>

            </div>
           <div>{images}</div>
        </div>
    )
}

export default ProfileFileUpload;