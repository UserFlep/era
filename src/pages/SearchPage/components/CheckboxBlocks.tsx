import React, {FC} from 'react';
import classes from "./styles/checkbox-blocks.module.less";
import {Checkbox, Col, Row, Space, Typography} from "antd";
import {useStore} from "../../../context";
import {observer} from "mobx-react-lite";
import type {CheckboxValueType} from "antd/es/checkbox/Group";
import { IBlock } from '../../../store/types';

const CheckboxBlocks: FC = observer (() => {
    const {checkStore} = useStore()
    const {getCheckBlocks, getCheckedList, setCheckedList} = checkStore
    const onCheckChange = (list: CheckboxValueType[]) => setCheckedList(list)

    return (
        <Checkbox.Group className={classes.chkGroup} onChange={onCheckChange} value={getCheckedList}>
            <Row className={classes.row} gutter={16}>
                {
                    getCheckBlocks.filter((el: IBlock)=>el.name!=="Прочие").map(({id, name, options}:IBlock)=>(
                        <Col flex="1 1" key={id} style={{minWidth: 250}}>
                            <Typography.Title level={4}>{name}</Typography.Title>
                            <Space direction={"vertical"} size={1}>
                                {options.map(({id, value})=>(<Checkbox key={id} value={value}>{value}</Checkbox>))}
                            </Space>
                        </Col>
                    ))
                }
            </Row>
        </Checkbox.Group>
    )
})

export default CheckboxBlocks;