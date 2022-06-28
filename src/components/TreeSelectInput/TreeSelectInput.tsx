import {TreeSelect} from 'antd';
import React, {useEffect} from 'react';
import { getTreeDataFromResponse } from '../../pages/SearchPage/utils';
import {useQuery} from "@apollo/client";
import {GET_TAGS} from "../../requests/tag/Query";
import {useMst} from "../../context";
import {IOption} from "../../types/option";
import { observer } from 'mobx-react-lite';

const TreeSelectInput = observer(() => {
    const {tagStore} = useMst()
    const {loading, error, data } = useQuery(GET_TAGS);
    const [treeData, setTreeData] = React.useState<IOption[]>();
    // const [value, setValue] = React.useState<string[]>();

    useEffect(()=>{
        if(data) {
            setTreeData(getTreeDataFromResponse(data.tags))
        }
        console.log("useEffect--->Data fetching")
    },[data])

    const onChange = (newValue: string[]) => {
        //setValue(newValue)
        tagStore.setSelectedList(newValue);
    };

    // Если и делать, нужно прописать onClose
    // const tagRender = (props:any) => {
    //     const {label} = props;
    //     return (
    //         <Tag color={blue.primary} closable={true} style={{ marginRight: 3 }}>
    //             {label}
    //         </Tag>
    //     );
    // }

    return (
        <TreeSelect
            // status={error ? "warning" : undefined}
            // switcherIcon={<span>switcherIcon</span>}
            showSearch
            style={{width: '100%'}}
            value={tagStore.selectedItems}
            //value={value}
            dropdownStyle={{maxHeight: 500, overflow: 'auto'}}
            placeholder={loading ? "Получение данных..." : error ? "Ошибка получения данных!" : "Поиск по ключевым словам"}
            fieldNames={{label: "title", value: "key", children: "children"}}
            treeData={treeData}
            filterTreeNode
            treeNodeFilterProp="title"
            allowClear
            multiple
            // tagRender={tagRender}
            onChange={onChange}
        />
    );
});

export default TreeSelectInput;