import React, {useState} from 'react';
import './pocket.css';
import axios from "axios";


function PocketPage() {

    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");

    const saveFile = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    };

    const uploadFile = async (e) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileName", fileName);
        try {
        const res = await axios.post(
            "http://localhost:3001/upload",
            formData
        );
        console.log(res);
        } catch (ex) {
        console.log(ex);
        }   
    };

    return (
        <div>
            <h1>pocket</h1>
            <input type="file" onChange={saveFile} />
            <button onClick={uploadFile}>Upload</button>
        </div>
    );
}

export default PocketPage;