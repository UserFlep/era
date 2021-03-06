import React, {useEffect} from 'react';
import classes from "./tree-select-input.module.less"
import {TreeSelect} from 'antd';
import type {DisplayValueType } from 'rc-select/lib/BaseSelect';
import type { DefaultOptionType } from 'antd/es/select'
import {useQuery} from "@apollo/client";
import {GET_TAGS} from "../../requests/tag/Query";
import {useMst} from "../../context";
import { observer } from 'mobx-react-lite';
import type {TreeSelectProps} from "antd/lib/tree-select"


const TreeSelectInput:React.FC<TreeSelectProps> = observer(({multiple=false}) => {
    const {tagStore} = useMst()
    const {loading, error, data } = useQuery(GET_TAGS);
    const [treeData, setTreeData] = React.useState<DefaultOptionType[]>();

    useEffect(()=>{
        if(data) {
            const newTreeData = data.tags?.map((el:any)=>({id: el.id, pId: el.parentId, value: el.id, title: el.name}))
            setTreeData(newTreeData)
        }
        console.log("useEffect--->Data fetching")
    },[data])

    const onChange = (newValue: string[] | string,) => {
        console.log("newValue", newValue)
        Array.isArray(newValue)
            ?
            tagStore.setSelectedList(newValue)
            :
            tagStore.setSelectedItem(newValue)
    };


    //omittedValues - теги не вместившиеся в строку input-а
    //titleLineNumber - количество элементов в строке всплывающего окна при наведении на "+7..."
    const maxTagPlaceholderHandler = (omittedValues: DisplayValueType[], titleLineNumber = 3)=>{
        const length = omittedValues.length;
        const title = omittedValues
            .map((item, index: number) => {
                let parameter = item.label;
                if (index !== length - 1) {
                    if ((index + 1) % titleLineNumber === 0) {
                        parameter += `,\n`;
                    } else {
                        parameter += ", ";
                    }
                }
                return parameter;
            }).join("")
        return (
            <span title={title}>
                <span>+</span>
                <span className={classes.omittedLabelSpan}>{omittedValues.length}</span>
                <span>...</span>
            </span>
        )
    }

    return (
        <TreeSelect
            className={classes.treeSelect}
            placeholder={loading ? "Получение данных..." : error ? "Ошибка получения данных!" : "Поиск по ключевым словам"}
            status={error ? "error" : ""}
            allowClear
            showSearch
            multiple={multiple}
            filterTreeNode
            treeDataSimpleMode
            maxTagCount="responsive"
            maxTagPlaceholder={maxTagPlaceholderHandler}
            showCheckedStrategy={"SHOW_ALL"}
            treeData={treeData}
            value={multiple ? tagStore.selectedItems : tagStore.selectedItem}
            treeNodeFilterProp="title"
            onChange={onChange}
        />
    );
});

export default TreeSelectInput;