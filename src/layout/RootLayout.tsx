import classes from "./root-layout.module.less";
import React from 'react';
import {Layout} from "antd";
import {Outlet} from "react-router-dom"
import MyHeader from "./Header/RootHeader";
import Sidebar from "./Sidebar/RootSidebar";
import MyBreadcrumb from "./Breadcrumb/RootBreadcrumb";

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

                        {/*Вместо <Outlet/> подставляются страницы из router.js*/}
                        <Outlet />

                    </Content>
                </Layout>

            </Layout>
        </Layout>
    );
};

export default RootLayout;