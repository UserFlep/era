import React from 'react';
import classes from "./tree-select-input.module.less"
import {Button, Input, Modal, Popconfirm, Popover, Tooltip} from "antd";
import {DeleteOutlined, PlusOutlined} from "@ant-design/icons";

interface IProps {
    title: string
}
const TreeNodeContent:React.FC<IProps> = ({title}) => {
    const [buttonsVisible, setButtonsVisible] = React.useState<boolean>(false)
    const [modalVisible, setModalVisible] = React.useState<boolean>(false)

    const mouseEnterHandler = ()=>{
        setButtonsVisible(true)
    }
    const mouseLeaveHandler = ()=>{
        setButtonsVisible(false)
    }

    const addButtonHandler = (event:any)=>{
        event.preventDefault();
        event.stopPropagation();
        setModalVisible(true);
    }
    const removeButtonHandler = ()=>{
        //Запрос к бд на удаление тега по id
    }

    const modalOkHandler = () => {
        setModalVisible(false);
    };

    const modalCancelHandler = () => {
        setModalVisible(false);
    };

    return (
        <>
        <Modal title="Добавление тега" visible={modalVisible} onOk={modalOkHandler} onCancel={modalCancelHandler} zIndex={1500}>
            <Input placeholder="Тег"></Input>
        </Modal>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
            <span>{title}</span>
            {buttonsVisible &&
                <div className={classes.btnContainer}>

                    <Tooltip title="Добавить дочерний элемент">
                        <Button type="text" size={"small"} icon={<PlusOutlined className={classes.addBtn} onClick={e=>addButtonHandler(e)}/>}></Button>
                    </Tooltip>

                    <Tooltip title="Удалить">
                        <Button type="text" size={"small"} icon={<DeleteOutlined className={classes.removeBtn} onClick={removeButtonHandler}/>}></Button>
                    </Tooltip>

                </div>
            }
        </div>
        </>
    )
};

export default TreeNodeContent;