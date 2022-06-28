import {Image, Layout, PageHeader, Space} from 'antd';
import React, {FC} from 'react';
import classes from "./search.module.less"
// import TagList from "../../components/TagList/TagList";
// import SearchInput from "../../components/SearchInput/SearchInput";
// import TagBlockList from "../../components/TagBlockList/TagBlockList";
import tempImages from "../../images/temp/images";
import SearchCard from "../../components/SearchCard/SearchCard";
import TreeSelectInput from "../../components/TreeSelectInput/TreeSelectInput";



const SearchPage: FC = () => {
    return (
        <Layout className={classes.layout}>
            <Layout className={classes.innerLayout}>

                <PageHeader style={{paddingTop:0}}>
                    <Space direction="vertical" style={{width: "100%"}}>
                        {/*<SearchInput/>*/}
                        {/*<TagList/>*/}
                        {/*<TagBlockList/>*/}
                        <TreeSelectInput/>
                    </Space>
                </PageHeader>

                <Layout.Content className={classes.content}>
                    <Image.PreviewGroup>
                        <Space size={16} style={{flexWrap: 'wrap'}}>
                            {tempImages.map((img:string)=>
                                <SearchCard key={img} imageUri={img}/>
                            )}
                        </Space>
                    </Image.PreviewGroup>
                </Layout.Content>

            </Layout>
        </Layout>
    );
};

export default SearchPage;