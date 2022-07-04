import React, { FC } from 'react';
import classes from "./search-card.module.less"
import {Badge, Card, Checkbox, Collapse, Image, Space, Tag} from "antd";



interface IProps {
    imageUri: string
}

const SearchCard: FC<IProps> = ({imageUri}) => {
    return (
        <Badge count={<Checkbox className="big-checkbox"></Checkbox>} offset={[-14,12]}>
            <Card className={classes.card} hoverable
                  cover={<Image preview={{maskClassName: classes.mask}} src={imageUri}/>}
            >
                <Space direction="vertical">
                    <Collapse ghost>
                        <Collapse.Panel key="1" header={
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