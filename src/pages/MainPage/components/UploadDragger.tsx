import React from 'react';
import {DownloadOutlined, InboxOutlined} from "@ant-design/icons";
import {Upload} from "antd";

const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

const UploadDragger = ({setPreviewImage, setPreviewVisible, setPreviewTitle}) => {

    const [fileList, setFileList] = React.useState([]);

    const handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview)
        setPreviewVisible(true)
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1))
    };

    const handleDraggerChange = ({fileList}) => setFileList(fileList);

    return (
        <Upload.Dragger
            style={{marginBottom: '8px'}}
            multiple
            // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            fileList={fileList}
            showUploadList={{
                showDownloadIcon: true,
                downloadIcon: <DownloadOutlined/>
            }}
            onPreview={handlePreview}
            onChange={handleDraggerChange}
        >
            {/*{fileList.length >= 8 ? null : uploadButton}*/}
            <p className="ant-upload-drag-icon">
                <InboxOutlined/>
            </p>
            <p className="ant-upload-text">Чтобы загрузить файлы, нажмите, или перенесите их в эту область</p>
            <p className="ant-upload-hint">Выбрать файлы</p>
        </Upload.Dragger>
    );
};

export default UploadDragger;