import {Checkbox, Collapse, Segmented, Space} from 'antd';
import React, {FC, useState} from 'react';
import {forceBlocks, IOption} from "./data"
const {Panel} = Collapse;

//console.log(forceBlocks)

const SEGMENTED_OPTIONS = forceBlocks.map(block => block.forceName)
//type optionsT = typeof SEGMENTED_OPTIONS[number]

interface IElementProps{
    options?: IOption[]
}

const CollapseElement:FC<IElementProps> = ({options})=> {
    return (
        <Collapse accordion>
            {
                options?.map((option) => {
                    const hasOptions: boolean = option?.children?.length !== 0

                    return (
                        hasOptions ?
                            <Panel showArrow={hasOptions} header={<Checkbox>{option.title}</Checkbox>} key={option.key}>
                                <CollapseElement options={option?.children}/>
                            </Panel>
                            :
                            <Panel collapsible="disabled" showArrow={hasOptions} header={<Checkbox>{option.title}</Checkbox>} key={option.key}/>
                    )
                })
            }
        </Collapse>
    )
}


const CollapseFilters:FC = () => {

    const [segmentedValue, setSegmentedValue] = useState<string | number>(SEGMENTED_OPTIONS[0]);

    return (
        <Space direction="vertical" style={{width: "100%"}}>
            <Segmented block options={SEGMENTED_OPTIONS} value={segmentedValue} onChange={setSegmentedValue}/>
            {
                forceBlocks.filter(block => block.forceName === segmentedValue).map((block) => {
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
};

export default CollapseFilters;