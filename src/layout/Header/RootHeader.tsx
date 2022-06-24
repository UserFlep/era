import classes from "./root-header.module.less"
import React, {FC} from 'react';
import Era from "../../images/era-logo.png";
import {Menu, Layout} from "antd";

const {Header} = Layout

const ITEMS = [
    { label: 'Обучающие выборки', key: 'item-1' },
    { label: 'Контрольные выборки', key: 'item-2' },
    { label: 'Нейронные сети', key: 'item-3' },
]

const MyHeader: FC = () => {
    return (
        <Header>
            <img className={classes.logo} src={Era} alt="ЭРА"/>
            <Menu
                theme="dark"
                className={classes.headerMenu}
                mode="horizontal"
                items={ITEMS}
                defaultSelectedKeys={['1']}
            />
        </Header>
    );
};

export default MyHeader;