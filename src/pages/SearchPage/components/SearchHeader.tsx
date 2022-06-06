import React, {FC} from 'react';
import {PageHeader} from "antd";
import CheckboxBlocks from "./CheckboxBlocks";
import TagList from "./TagList";
import CompleteInput from "./CompleteInput";

const SearchHeader: FC = () => (
        <PageHeader>
            <TagList/>
            <CompleteInput/>
            <CheckboxBlocks/>
        </PageHeader>
    )


export default SearchHeader;