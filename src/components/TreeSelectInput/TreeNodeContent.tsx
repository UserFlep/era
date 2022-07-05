import React from 'react';
import classes from "./tree-select-input.module.less"
import {Button, Tooltip} from "antd";
import {DeleteOutlined, PlusOutlined} from "@ant-design/icons";

interface IProps {
    title: string
}
const TreeNodeContent:React.FC<IProps> = ({title}) => {
    const [visible, setVisible] = React.useState<boolean>(false)
    const mouseEnterHandler = ()=>{
        setVisible(true)
    }
    const mouseLeaveHandler = ()=>{
        setVisible(false)
    }
    return (
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
            <span>{title}</span>
            { visible &&
                <div className={classes.btnContainer}>
                    <Tooltip title="Добавить дочерний элемент">
                        <Button type="text" size={"small"} icon={<PlusOutlined className={classes.addBtn}/>}></Button>
                    </Tooltip>
                    <Tooltip title="Удалить">
                        <Button type="text" size={"small"} icon={<DeleteOutlined className={classes.removeBtn}/>}></Button>
                    </Tooltip>
                </div>
            }
        </div>
    )
};

export default TreeNodeContent;