import {Image, Layout, PageHeader, Space} from 'antd';
import React, {FC} from 'react';
import classes from "./search.module.less"
import tempImages from "../../images/temp/images";
import SearchCard from "../../components/SearchCard/SearchCard";
import TreeSelectInput from "../../components/TreeSelectInput/TreeSelectInput";



const SearchPage: FC = () => {
    return (
        <Layout className={classes.layout}>
            <Layout className={classes.innerLayout}>

                <PageHeader style={{paddingTop:0}}>
                    <Space direction="vertical" style={{width: "100%"}}>
                        <TreeSelectInput/>
                    </Space>
                </PageHeader>

                <Layout.Content className={classes.content}>
                    <Image.PreviewGroup>
                        <Space size={16} style={{flexWrap: 'wrap'}}>
                            {tempImages.map((imgUri:string)=>
                                <SearchCard key={imgUri} imageUri={imgUri}/>
                            )}
                        </Space>
                    </Image.PreviewGroup>
                </Layout.Content>

            </Layout>
        </Layout>
    );
};

export default SearchPage;