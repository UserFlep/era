import {Button, TreeSelect} from 'antd';
import React, {useEffect} from 'react';
import classes from "./tree-select-input.module.less"
import { PlusOutlined, DeleteOutlined} from '@ant-design/icons';
import type { DefaultOptionType } from 'antd/es/select'
import {useQuery} from "@apollo/client";
import {GET_TAGS} from "../../requests/tag/Query";
import {useMst} from "../../context";
import { observer } from 'mobx-react-lite';

interface INodeProps {
    title: string
}
const TreeNodeContent: React.FC<INodeProps> = ({title})=>{
    const mouseEnterHandler = ()=>{

    }
    const mouseLeaveHandler = ()=>{

    }
    return (
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
            <span>{title}</span>
            <div>
                <Button type="text" size={"small"} icon={<PlusOutlined style={{color: "#8c8c8c"}}/>}></Button>
                <Button type="text" size={"small"} icon={<DeleteOutlined/>} danger></Button>
            </div>
        </div>
    )
}

interface IProps {
    maxTagCount?: number | 'responsive'
}
const TreeSelectInput:React.FC<IProps> = observer(({maxTagCount="responsive"}) => {
    const {tagStore} = useMst()
    const {loading, error, data } = useQuery(GET_TAGS);
    const [treeData, setTreeData] = React.useState<DefaultOptionType[]>();

    useEffect(()=>{
        if(data) {
            const newTreeData = data.tags?.map((el:any)=>({id: el.id, pId: el.parentId, value: el.id, title: <TreeNodeContent title={el.name}/>}))
            setTreeData(newTreeData)
        }
        console.log("useEffect--->Data fetching")
    },[data])

    const onChange = (newValue: string[]) => {
        tagStore.setSelectedList(newValue);
    };

    return (
        <TreeSelect
            status={error ? "warning" : undefined}
            className={classes.treeSelect}
            showSearch
            showCheckedStrategy={"SHOW_ALL"}
            value={tagStore.selectedItems}
            placeholder={loading ? "Получение данных..." : error ? "Ошибка получения данных!" : "Поиск по ключевым словам"}
            treeDataSimpleMode
            treeData={treeData}
            filterTreeNode
            treeNodeFilterProp="title"
            maxTagCount={maxTagCount}
            allowClear
            multiple
            onChange={onChange}
        />
    );
});

export default TreeSelectInput;