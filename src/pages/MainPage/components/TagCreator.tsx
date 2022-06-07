import React from 'react';
import {PlusOutlined} from "@ant-design/icons";
import {Input, message, Space, Typography} from "antd";
import {observer} from 'mobx-react-lite';
import {useStore} from "../../../context";
import {IOption} from "../../../store/types"

const TagCreator = observer(() => {
    const {checkStore} = useStore()
    const {checkBlocks, addOption, getOtherBlockIndex} = checkStore
    const [inputData, setInputData] = React.useState('')


    const createButtonHandler = ()=>{

        if(inputData.trim()==='')
            message.error('Значение не задано')

        else if(checkBlocks[getOtherBlockIndex].options.some((option:IOption) => option.value === inputData))
            message.error('Такое значение уже есть')

        else {
            addOption(inputData)
            setInputData('')
        }
    }

    return (
        <Space align="center" style={{marginBottom: 8}}>
            <Input placeholder="Добавить свое ключевое слово" value={inputData} onChange={e=>setInputData(e.target.value)}/>
            <Typography.Link onClick={createButtonHandler}>
                <PlusOutlined /> Добавить
            </Typography.Link>
        </Space>
    );
});

export default TagCreator;