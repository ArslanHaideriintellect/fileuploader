import React from 'react';
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import './App.css';

const App = () => {
    // specify upload params and url for your files
    const getUploadParams = ({meta}) => {
        return {url: 'https://httpbin.org/post'}
    }

    // called every time a file's `status` changes
    const handleChangeStatus = ({meta, file}, status) => {
        console.log(status, meta, file)

    }

    // receives array of files that are done uploading when submit button is clicked
    const handleSubmit = (files) => {
        console.log(files.map(f => f.meta))
    }

    return (
        <div className="main-div">
            <h1>File Uploader</h1>
            <Dropzone
                getUploadParams={getUploadParams}
                onChangeStatus={handleChangeStatus}
                onSubmit={handleSubmit}
            />
        </div>
    )
}

export default App;
