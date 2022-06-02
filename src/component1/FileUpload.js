import React, { useState } from 'react';
import Dropzone from 'react-dropzone'
import {useDropzone} from 'react-dropzone'



function FileUpload() {

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
                <img  src={file.preview} style={{ width: "300px" }} alt="preview"  ></img>
            </div>
        </div>
    ))

    return(
        <div>
            <div {...getRootProps()}>

               <input {...getInputProps()} name='작품'/>
               {/* <input type='file' name="작품"/>   */}
        
               <p>Click to upload</p>

            </div>
           <div>{images}</div>
        </div>
    )
}

export default FileUpload;