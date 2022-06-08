import React, {FC} from 'react';
import classes from "./styles/search-content.module.less";
import {Image, Space, Layout} from "antd";
import tempImages from "../../../images/temp/images";
import SearchCard from "./SearchCard";
const {Content} = Layout;

const SearchContent: FC = () => {
    return (
        <Content className={classes.content}>
            <Image.PreviewGroup>
                <Space size={16} style={{flexWrap: 'wrap'}}>
                    {tempImages.map((img:string)=>
                        <SearchCard key={img} imageUri={img}/>
                    )}
                </Space>
            </Image.PreviewGroup>
        </Content>
    );
};

export default SearchContent;