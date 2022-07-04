import classes from "./upload-modal.module.less"
import React, {FC, useState} from 'react';
import {Modal, Button, Tooltip, Divider} from 'antd';
import {UploadOutlined} from "@ant-design/icons"
import UploadDragger from "./UploadDragger";
import TreeSelectInput from "../TreeSelectInput/TreeSelectInput";

const UploadModal: FC = () => {
    const [modalVisible, setModalVisible] = useState<boolean>(false)
    const [previewVisible, setPreviewVisible] = useState<boolean>(false)
    const [previewImage, setPreviewImage] = useState<string>('')
    const [previewTitle, setPreviewTitle] = useState<string>('')

    const handlePreviewModalCancel = () => setPreviewVisible(false);
    const handleModalCancel = () => setModalVisible(false);

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
                width={'60%'}
                visible={modalVisible}
                onCancel={handleModalCancel} //выполняется при закрытие окна(клике вне окна или клике по крестику)
                footer={[
                    <Button key="back">
                        Отменить
                    </Button>,
                    <Button key="submit" type="primary">
                        Добавить
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
                </Modal>

                <Divider/>
                <span>Выберите родительскую группу:</span>
                <TreeSelectInput/>

            </Modal>
        </div>
    );
}

export default UploadModal