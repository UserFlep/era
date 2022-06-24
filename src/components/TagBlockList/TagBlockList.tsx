// import classes from "./styles/tag-block-list.module.less"
import {Checkbox, Collapse, Segmented, Space} from 'antd';
import React, {FC, useEffect, useState} from 'react';
import {IOption, IForce} from "../../types/option"
import {useQuery} from "@apollo/client";
import { GET_TAGS } from '../../requests/option/Query';
import {useMst} from "../../context"
import {observer} from "mobx-react-lite";
const {Panel} = Collapse;

interface IElementProps{
    options?: IOption[],
    optionStore: any
}

const CollapseElement:FC<IElementProps> = observer(({options, optionStore})=> {

    const toggleHandler = (option: IOption)=>{
        optionStore.checkToggle(option.key, option.title)
    }

    return (
        <Collapse accordion>
            {
                options?.map((option) => {
                    const hasOptions: boolean = option?.children?.length !== 0

                    return (
                        hasOptions ?
                            <Panel showArrow={hasOptions} header={<span><Checkbox checked={optionStore.checkedList.has(option.key)} onChange={()=>toggleHandler(option)}>{option.title}</Checkbox></span>} key={option.key}>
                                <CollapseElement options={option?.children} optionStore={optionStore}/>
                            </Panel>
                            :
                            <Panel collapsible="disabled" showArrow={hasOptions} header={<span><Checkbox checked={optionStore.checkedList.has(option.key)} onChange={()=>toggleHandler(option)}>{option.title}</Checkbox></span>} key={option.key}/>
                    )
                })
            }
        </Collapse>
    )
})


const TagBlockList:FC = observer(() => {

    const {optionStore} = useMst()
    const {loading, error, data } = useQuery(GET_TAGS);

    const [segmentedValue, setSegmentedValue] = useState<string | number>();
    const [forceBlocks, setForceBlocks] = useState<IForce[]>([])
    const [segOptions, setSegOptions] = useState<any>([])

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
                                <CollapseElement key={block?.forceName} options={block?.options} optionStore={optionStore}/>
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