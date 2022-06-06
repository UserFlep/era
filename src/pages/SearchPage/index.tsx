import { Layout } from 'antd';
import React, {FC} from 'react';
import classes from "./index.module.less"
import SearchHeader from "./components/SearchHeader";
import SearchContent from "./components/SearchContent";

const SearchPage: FC = () => {
    return (
        <Layout className={classes.layout}>
            <Layout className={classes.innerLayout}>
                <SearchHeader/>
                <SearchContent/>
            </Layout>
        </Layout>
    );
};

export default SearchPage;