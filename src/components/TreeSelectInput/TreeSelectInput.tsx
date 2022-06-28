import {Tag, TreeSelect} from 'antd';
import React, {useEffect} from 'react';
import { getTreeDataFromResponse } from '../../pages/SearchPage/utils';
import {useQuery} from "@apollo/client";
import {GET_TAGS} from "../../requests/option/Query";
import {useMst} from "../../context";
import {blue} from "@ant-design/colors";
import {IOption} from "../../types/option";
import { observer } from 'mobx-react-lite';

const TreeSelectInput = observer(() => {
    const {tagStore} = useMst()
    const {loading, error, data } = useQuery(GET_TAGS);
    const [treeData, setTreeData] = React.useState<IOption[]>();

    useEffect(()=>{
        if(data) {
            setTreeData(getTreeDataFromResponse(data.tags))
        }
        console.log("useEffect--->Data fetching")
    },[data])

    const onChange = (newValue: string[]) => {
        tagStore.setSelectedList(newValue);
    };

    const tagRender = (props:any) => {
        const {label} = props;
        return (
            <Tag color={blue.primary} closable={true} style={{ marginRight: 3 }}>
                {label}
            </Tag>
        );
    }

    return (
        <TreeSelect
            showSearch
            style={{width: '100%'}}
            value={tagStore.selectedItems}
            dropdownStyle={{maxHeight: 400, overflow: 'auto'}}
            placeholder={loading ? "Получение данных..." : error ? "Ошибка получения данных!" : "Поиск по ключевым словам"}
            fieldNames={{label: "title", value: "key", children: "children"}}
            treeData={treeData}
            filterTreeNode
            treeNodeFilterProp="title"
            allowClear
            multiple
            tagRender={tagRender}
            onChange={onChange}
        />
    );
});

export default TreeSelectInput;