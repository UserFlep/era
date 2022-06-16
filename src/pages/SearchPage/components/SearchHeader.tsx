import React, {FC} from 'react';
import {PageHeader, Space} from "antd";
//import CheckboxBlocks from "./CheckboxBlocks";
import TagList from "./TagList";
import CompleteInput from "./CompleteInput";
import CollapseFilters from "./Temp/CollapseFilters";

const SearchHeader: FC = () => (
        <PageHeader style={{paddingTop:0}}>
            <Space direction="vertical" style={{width: "100%"}}>
                <TagList/>
                <CompleteInput/>
                {/*<CheckboxBlocks/>*/}
                <CollapseFilters/>
            </Space>
        </PageHeader>
    )


export default SearchHeader;