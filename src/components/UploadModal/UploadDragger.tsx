import React, { FC } from 'react';
import classes from "./upload-modal.module.less"
import {DownloadOutlined, InboxOutlined} from "@ant-design/icons";
import type { RcFile, UploadProps } from 'antd/es/upload';
import type { UploadFile } from 'antd/es/upload/interface';
import {Upload} from "antd";

const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = error => reject(error);
    });

interface IProps {
    setPreviewImage: React.Dispatch<React.SetStateAction<string>>,
    setPreviewVisible: React.Dispatch<React.SetStateAction<boolean>>,
    setPreviewTitle: React.Dispatch<React.SetStateAction<string>>
}

const UploadDragger: FC<IProps> = ({setPreviewImage, setPreviewVisible, setPreviewTitle}) => {

    const [fileList, setFileList] = React.useState<UploadFile[]>([]);

    const handlePreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj as RcFile);
        }
        setPreviewImage(file.url || (file.preview as string))
        setPreviewVisible(true)
        setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1))
    };

    const handleDraggerChange: UploadProps['onChange'] = ({fileList: newFileList}) => setFileList(newFileList);

    return (
        <Upload.Dragger
            className={classes.dragger}
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
            <p className="ant-upload-drag-icon">
                <InboxOutlined/>
            </p>
            <p className="ant-upload-text">Чтобы загрузить файлы, нажмите, или перенесите их в эту область</p>
            <p className="ant-upload-hint">Выбрать файлы</p>
        </Upload.Dragger>
    );
};

export default UploadDragger;