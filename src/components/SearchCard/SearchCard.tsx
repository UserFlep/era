import React, { FC } from 'react';
import classes from "./search-card.module.less"
import {Badge, Card, Checkbox, Collapse, Image, Space, Tag} from "antd";



interface IProps {
    imageUri: string
}

const SearchCard: FC<IProps> = ({imageUri}) => {
    return (
        <Badge count={<Checkbox className="big-checkbox"></Checkbox>} offset={[-14,12]}>
            <Card className={classes.card} bodyStyle={{padding: 2}} hoverable
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