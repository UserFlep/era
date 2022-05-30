import classes from "./styles/index.module.css";
import React from 'react';
import {Layout} from "antd";
import {Outlet} from "react-router-dom"
import MyHeader from "./Header";
import Sidebar from "./Sidebar";
import MyBreadcrumb from "./Breadcrumb";

const {Content} = Layout

const RootLayout = () => {
    return (
        <Layout>
            <MyHeader/>

            <Layout>
                <Sidebar/>

                <Layout className={classes.layoutBreadcrumbContent}>
                    <MyBreadcrumb/>
                    <Content className={classes.content}>

                        {/*Сюда подставляются страницы из router.js*/}
                        <Outlet />

                    </Content>
                </Layout>

            </Layout>
        </Layout>
    );
};

export default RootLayout;