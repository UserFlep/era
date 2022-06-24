import classes from "../styles/sidebar.module.css"
import React, {FC} from 'react';
import {Menu, Layout} from "antd";
import {
    HourglassOutlined,
    LaptopOutlined,
    NotificationOutlined,
    ProjectOutlined,
    UserOutlined
} from "@ant-design/icons";

const {Sider} = Layout

const ITEMS = [
    {
        key: "sub1",
        icon: <UserOutlined/>,
        label: "Научная деятельность",
        title: "Научная деятельность"
    },
    {
        key: "sub2",
        icon: <LaptopOutlined/>,
        label: "Наука и безопасность",
        title: "Наука и безопасность"
    },
    {
        key: "sub3",
        icon: <HourglassOutlined/>,
        label: "Документация",
        title: "Документация"
    },
    {
        key: "sub4",
        icon: <NotificationOutlined/>,
        label: "Справка",
        title: "Справка"
    },
    {
        key: "sub5",
        icon: <ProjectOutlined/>,
        label: "Полезные программы",
        title: "Полезные программы"
    },
]


const Sidebar:FC = () => {

    return (
        <Sider width={280} breakpoint="lg" collapsedWidth={60}>
            <Menu
                mode="inline"
                className={classes.siderMenu}
                items={ITEMS}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
            />
        </Sider>
    );
}

export default Sidebar;