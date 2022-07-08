import React, {FC, useState} from 'react';
import classes from "./upload-modal.module.less"
import {InboxOutlined} from "@ant-design/icons";
import type { RcFile, UploadProps } from 'antd/es/upload';
import type { UploadFile } from 'antd/es/upload/interface';
import {Upload} from "antd";
import {useMutation} from "@apollo/client";
import {ADD_FILES} from "../../requests/file/Mutation";

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

    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const [addFiles] = useMutation(ADD_FILES);

    const addFilesHandler = () => {
        addFiles({
            variables: {
                files: fileList,
                tagIds: ["1","2"]
            },
        }).then(e=>console.log("addFiles->then",e))
    }

    const handlePreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj as RcFile);
        }
        setPreviewImage(file.url || (file.preview as string))
        setPreviewVisible(true)
        setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1))
    };

    const handleDraggerChange: UploadProps['onChange'] = ({fileList: newFileList}) => {
        setFileList(newFileList);
    }

    return (
        <Upload.Dragger
            className={classes.dragger}
            multiple
            //beforeUpload={(file) => {if(lastModified === dbFiles.lastModified && size === dbFiles.lastModified)return false}} //фильтр на upload файлы, false - успех, true - ошибка
            beforeUpload={()=> false} //фильтр на upload файлы, false - успех, true - ошибка
            listType="picture-card"
            fileList={fileList}
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