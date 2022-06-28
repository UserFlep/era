import React, {FC} from 'react';
import {observer} from "mobx-react-lite";
import {IOption} from "../../types/option";
import {Checkbox, Collapse} from "antd";
import {useMst} from "../../context";

interface IProps{
    options?: IOption[]
}

const TagBlockListItem:FC<IProps> = observer(({options}) => {
    const {optionStore} = useMst()

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
                            <Collapse.Panel
                                showArrow={hasOptions}
                                header={<span><Checkbox checked={optionStore.checkedList.has(option.key)}
                                onChange={()=>toggleHandler(option)}>{option.title}</Checkbox></span>}
                                key={option.key}
                            >
                                <TagBlockListItem options={option?.children}/>
                            </Collapse.Panel>
                            :
                            <Collapse.Panel
                                collapsible="disabled"
                                showArrow={hasOptions}
                                header={<span><Checkbox
                                checked={optionStore.checkedList.has(option.key)}
                                onChange={()=>toggleHandler(option)}>{option.title}</Checkbox></span>}
                                key={option.key}
                            />
                    )
                })
            }
        </Collapse>
    )
});

export default TagBlockListItem;