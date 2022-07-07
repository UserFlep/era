import classes from "./upload-modal.module.less"
import React, {FC, useState} from 'react';
import {Modal, Button, Tooltip, Divider} from 'antd';
import {UploadOutlined} from "@ant-design/icons"
import UploadDragger from "./UploadDragger";
import TreeSelectInput from "../TreeSelectInput/TreeSelectInput";
import {UploadFile} from "antd/es/upload/interface";
import { useMutation } from "@apollo/client";
import {ADD_FILES} from "../../requests/file/Mutation";

const UploadModal: FC = () => {
    const [modalVisible, setModalVisible] = useState<boolean>(false)
    const [previewVisible, setPreviewVisible] = useState<boolean>(false)
    const [previewImage, setPreviewImage] = useState<string>('')
    const [previewTitle, setPreviewTitle] = useState<string>('')




    const handleModalClose = () => setModalVisible(false);
    const handlePreviewModalCancel = () => setPreviewVisible(false);

    return (
        <div>
            <Tooltip title="Добавить файлы">
                <Button
                    onClick={() => setModalVisible(true)}
                    icon={<UploadOutlined/>}
                />
            </Tooltip>


            <Modal
                title="Выберите файлы"
                centered
                width='60%'
                visible={modalVisible}
                onCancel={handleModalClose} //выполняется при закрытие окна(клике вне окна или клике по крестику)
                footer={[
                    <Button key="submit" type="primary" onClick={handleModalClose}>
                        ОК
                    </Button>,
                ]}
            >
                {/*Область добавления/переноса туда файлов*/}
                <UploadDragger
                    setPreviewImage={setPreviewImage}
                    setPreviewVisible={setPreviewVisible}
                    setPreviewTitle={setPreviewTitle}
                />

                {/*Preview - предпросмотр файла - открывает файл на весь экран с возможностью перехода к другим изображениям*/}
                <Modal
                    visible={previewVisible}
                    title={previewTitle}
                    footer={null}
                    onCancel={handlePreviewModalCancel}
                >
                    <img alt="просмотр" className={classes.imgPreview} src={previewImage}/>
                    <Divider/>
                    <TreeSelectInput />
                </Modal>

                <Divider/>
                <span>Назначить теги:</span>
                <TreeSelectInput />

            </Modal>
        </div>
    );
}

export default UploadModal