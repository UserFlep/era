import {observer} from "mobx-react-lite";
import {useStore} from "../../../context";
import React, {FC, ReactNode} from "react";
import {AutoComplete, Input} from "antd";
import classes from "./styles/complete-input.module.less";
import {IOption} from "../../../store/types";

interface IProps {
    enterButton?: ReactNode
}

const CompleteInput: FC<IProps> = observer(({enterButton, ...params})=>{
    const {checkStore} = useStore()
    const {getOptionList, checkedList, setCheckedList} = checkStore
    const [completeValue, setCompleteValue] = React.useState('')

    const filterOption: any = (inputValue: string, option:IOption): boolean => {
        return option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    }

    const selectHandler = (data: string) => {
        if (checkedList.indexOf(data) === -1)
            setCheckedList([...checkedList, data])
        setCompleteValue('')
    }

    const changeHandler = (data: string) => {
        if (data !== completeValue)
            setCompleteValue(data)
    }

    return (
        <AutoComplete
            className={classes.aComplete}
            value={completeValue}
            options={completeValue.length !== 0 && getOptionList}
            filterOption={filterOption}
            onSelect={selectHandler}
            onChange={changeHandler}
            {...params}
        >
            <Input.Search
                style={{borderRadius: 8}}
                placeholder={"Выберите ключевое слово"}
                size="large"
                enterButton={enterButton ? enterButton : true }
                // enterButton просто картинка лупы поиска
            />
        </AutoComplete>
    );
})

export default CompleteInput;