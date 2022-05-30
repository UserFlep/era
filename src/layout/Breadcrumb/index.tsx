import classes from "../styles/breadcrumb.module.css"
import React, {FC} from 'react';
import {Breadcrumb, Button, Space, Tooltip} from "antd";
import {ArrowLeftOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";

const {Item} = Breadcrumb

const MyBreadcrumb:FC = () => {
    let navigate = useNavigate();
    return (
        <Space size='large'>
            <Tooltip title="Назад" placement="bottom">
                <Button shape="circle" icon={<ArrowLeftOutlined />} onClick={()=>navigate("/")}/>
            </Tooltip>

            <Breadcrumb className={classes.breadcrumb}>
                <Item>Home</Item>
                <Item>List</Item>
                <Item>App</Item>
            </Breadcrumb>
        </Space>

    );
}

export default MyBreadcrumb;