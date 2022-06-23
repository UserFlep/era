// import styles from "./styles/collapse-filters.module.less"
import {Checkbox, Collapse, Segmented, Space} from 'antd';
import React, {FC,Key, useEffect, useState} from 'react';
import {getBlocksFromResponse, IOption, IForce} from "./data"
import {useQuery} from "@apollo/client";
import { GET_TAGS } from '../../../requests/option/Query';
import {useMst} from "../../../store/mst/Root"
import {observer} from "mobx-react-lite";
const {Panel} = Collapse;

//type optionsT = typeof SEGMENTED_OPTIONS[number]

interface IElementProps{
    options?: IOption[]
}

const CollapseElement:FC<IElementProps> = observer(({options})=> {
    const {optionStore} = useMst()
    const toggleHandler = (option: any)=>{
        // optionStore.checkList.has(option.key) ?

    }
    return (
        <Collapse accordion>
            {
                options?.map((option) => {
                    const hasOptions: boolean = option?.children?.length !== 0

                    return (
                        hasOptions ?
                            <Panel showArrow={hasOptions} header={<Checkbox onChange={()=>toggleHandler(option)}>{option.title}</Checkbox>} key={option.key}>
                                <CollapseElement options={option?.children}/>
                            </Panel>
                            :
                            <Panel collapsible="disabled" showArrow={hasOptions} header={<Checkbox onChange={toggleHandler}>{option.title}</Checkbox>} key={option.key}/>
                    )
                })
            }
        </Collapse>
    )
})


const CollapseFilters:FC = observer(() => {

    const {optionStore} = useMst()
    const { loading, error, data } = useQuery(GET_TAGS);

    const [segmentedValue, setSegmentedValue] = useState<string | number>();
    const [forceBlocks, setForceBlocks] = useState<IForce[]>([])
    const [segOptions, setSegOptions] = useState<any>([])

    useEffect(()=>{
        if(data) {
            optionStore.setOptionBlocksList(data.tags)

            // const newForceBlocks = getBlocksFromResponse(data)
            // const newSegOptions = newForceBlocks.map((block:IForce) => block.forceName)
            //
            // setSegOptions(newSegOptions)
            // setForceBlocks(newForceBlocks)
        }
    },[data])

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
                                <CollapseElement key={block?.forceName} options={block?.options}/>
                            )
                        })
                    }
                    <Space style={{width: "100%", background: "lightgrey"}}>
                        <p>Панель фильтров</p>
                    </Space>
                </Space>
    );
});

export default CollapseFilters;