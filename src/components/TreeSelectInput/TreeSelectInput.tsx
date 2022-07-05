import {Tag, TreeSelect} from 'antd';
import React, {useEffect} from 'react';
import classes from "./tree-select-input.module.less"
import type { DefaultOptionType } from 'antd/es/select'
import {useQuery} from "@apollo/client";
import {GET_TAGS} from "../../requests/tag/Query";
import {useMst} from "../../context";
import {blue} from "@ant-design/colors";
import { observer } from 'mobx-react-lite';
import TreeNodeContent from './TreeNodeContent';


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
        console.log(newValue)
        tagStore.setSelectedList(newValue);
    };

    const tagRender = (props:any) => {
        const {label:{props:{title}}, value, closable, onClose } = props;

        //Чтоб не раскрывался список при нажатии на тег
        const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
            event.preventDefault();
            event.stopPropagation();
        };

        return (
            <Tag key={value} color={blue.primary} onMouseDown={onPreventMouseDown} closable={closable} onClose={onClose}>
                {title}
            </Tag>
        );
    }

    return (
        <TreeSelect
            className={classes.treeSelect}
            allowClear
            showSearch
            multiple
            filterTreeNode
            treeDataSimpleMode
            maxTagCount={maxTagCount}
            showCheckedStrategy={"SHOW_ALL"}
            placeholder={loading ? "Получение данных..." : error ? "Ошибка получения данных!" : "Поиск по ключевым словам"}
            status={error ? "warning" : undefined}
            treeData={treeData}
            value={tagStore.selectedItems}
            tagRender={tagRender}
            treeNodeFilterProp="title"
            onChange={onChange}
        />
    );
});

export default TreeSelectInput;