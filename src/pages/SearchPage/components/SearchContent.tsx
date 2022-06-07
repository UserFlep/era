import React, {FC} from 'react';
import classes from "./styles/search-content.module.less";
import {Image, Space, Layout} from "antd";

import temp1 from "../../../images/temp/temp (1).png";
import temp2 from "../../../images/temp/temp (2).png";
import temp3 from "../../../images/temp/temp (3).png";
import temp4 from "../../../images/temp/temp (4).png";
import temp5 from "../../../images/temp/temp (5).png";
import temp6 from "../../../images/temp/temp (6).png";
import temp7 from "../../../images/temp/temp (7).png";
import temp8 from "../../../images/temp/temp (8).png";
import temp9 from "../../../images/temp/temp (9).png";
import temp10 from "../../../images/temp/temp (10).png";
import temp11 from "../../../images/temp/temp (11).png";
import temp12 from "../../../images/temp/temp (12).png";
import temp13 from "../../../images/temp/temp (13).png";
import temp14 from "../../../images/temp/temp (14).png";
import temp15 from "../../../images/temp/temp (15).png";
import temp16 from "../../../images/temp/temp (16).png";
import temp17 from "../../../images/temp/temp (17).png";
import temp18 from "../../../images/temp/temp (18).png";
import temp19 from "../../../images/temp/temp (19).png";
import temp20 from "../../../images/temp/temp (20).png";

const SearchContent: FC = () => {
    return (
        <Layout.Content className={classes.content}>
            <Image.PreviewGroup>
                <Space size={16} style={{flexWrap: 'wrap'}}>
                    <Image width={180} src={temp1} />
                    <Image width={180} src={temp2} />
                    <Image width={180} src={temp3} />
                    <Image width={180} src={temp4} />
                    <Image width={180} src={temp5} />
                    <Image width={180} src={temp6} />
                    <Image width={180} src={temp7} />
                    <Image width={180} src={temp8} />
                    <Image width={180} src={temp9} />
                    <Image width={180} src={temp10} />
                    <Image width={180} src={temp11} />
                    <Image width={180} src={temp12} />
                    <Image width={180} src={temp13} />
                    <Image width={180} src={temp14} />
                    <Image width={180} src={temp15} />
                    <Image width={180} src={temp16} />
                    <Image width={180} src={temp17} />
                    <Image width={180} src={temp18} />
                    <Image width={180} src={temp19} />
                    <Image width={180} src={temp20} />
                </Space>
            </Image.PreviewGroup>
        </Layout.Content>
    );
};

export default SearchContent;