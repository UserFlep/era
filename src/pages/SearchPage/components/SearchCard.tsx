import React, { FC } from 'react';
import classes from "./styles/search-card.module.less"
import {Badge, Button, Card, Checkbox, Collapse, Dropdown, Image, Menu, Space, Tag} from "antd";
import {MoreOutlined} from "@ant-design/icons"


const menu = (
    <Menu
        items={[
            {
                label: '1st menu item',
                key: '1',
            },
            {
                label: '2nd menu item',
                key: '2',
            },
            {
                label: '3rd menu item',
                key: '3',
            },
        ]}
    />
);

interface IProps {
    imageUri: string
}

const SearchCard: FC<IProps> = ({imageUri}) => {
    return (
        <Badge count={<Checkbox></Checkbox>}>
            <Card className={classes.card} bodyStyle={{padding: 2}} hoverable
                  title={<Checkbox></Checkbox>}
                  extra={<Dropdown overlay={menu} trigger={["click"]}><MoreOutlined style={{fontSize: 22}} /></Dropdown>}
                  cover={<Image preview={{maskClassName: classes.mask}} src={imageUri}/>}
            >
                <Space direction="vertical" style={{width: "100%"}}>
                    <Collapse ghost style={{padding: 0}}>
                        <Collapse.Panel key="1" style={{padding: 0}} header={
                            <Space className={classes.cardInfo}>
                                <label className={classes.info}>PNG - 1280x720 - 600KB</label>
                                <Tag>IMG</Tag>
                            </Space>}
                        >
                            <Space wrap>
                                <Tag color="blue">Сухопутные войска</Tag>
                                <Tag color="blue">Танки</Tag>
                                <Tag color="blue">Видимый свет</Tag>
                            </Space>
                        </Collapse.Panel>
                    </Collapse>
                </Space>
            </Card>
        </Badge>
    );
};

export default SearchCard;