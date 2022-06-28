// import classes from "./styles/tag-block-list.module.less"
import {Segmented, Space} from 'antd';
import React, {FC, useEffect, useState} from 'react';
import {IForce} from "../../types/option"
import {useQuery} from "@apollo/client";
import { GET_TAGS } from '../../requests/option/Query';
import {useMst} from "../../context"
import {observer} from "mobx-react-lite";
import TagBlockListItem from "../TagBlockListItem/TagBlockListItem";


const TagBlockList:FC = observer(() => {

    const {optionStore} = useMst()
    const {loading, error, data } = useQuery(GET_TAGS);

    const [segmentedValue, setSegmentedValue] = useState<string | number>();
    const [forceBlocks, setForceBlocks] = useState<IForce[]>([])
    const [segOptions, setSegOptions] = useState<string[]>([])

    useEffect(()=>{
        if(data) {
            optionStore.setOptionList(data.tags)
            const newForceBlocks = optionStore.getOptionBlocksList
            const newSegOptions = newForceBlocks.map((block:IForce) => block.forceName)
            setSegOptions(newSegOptions)
            setSegmentedValue(newSegOptions[0] ?? [])
            setForceBlocks(newForceBlocks)
        }
        console.log("useEffect--->Data fetching")
    },[data, optionStore])

    return (
        loading ?
            <span>Загрузка...</span>
            :
            error ?
                <span>Ошибка получения данных</span>
                :
                <Space direction="vertical" style={{width: "100%"}}>
                    <Segmented block options={segOptions} value={segmentedValue} onChange={setSegmentedValue}/>
                    {
                        forceBlocks.filter((block:any) => block.forceName === segmentedValue).map((block:any) => {
                            return (
                                <TagBlockListItem key={block?.forceName} options={block?.options}/>
                            )
                        })
                    }
                    <Space style={{width: "100%", background: "lightgrey"}}>
                        <p>Панель фильтров</p>
                    </Space>
                </Space>
    );
});

export default TagBlockList;