import {observer} from "mobx-react-lite";
import React, {FC, ReactNode} from "react";
import {AutoComplete, Input} from "antd";
import classes from "./search-input.module.less";
import {useMst} from "../../context"

interface IProps {
    enterButton?: ReactNode
}

const SearchInput: FC<IProps> = observer(({enterButton, ...params})=>{

    const [completeValue, setCompleteValue] = React.useState('')

    const {optionStore} = useMst()

    const filterOption: any = (inputValue: string, option:any): boolean => {
        return option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    }

    const selectHandler = (value: string, option:any) => {
        if (!optionStore.checkedList.has(option.key))
            optionStore.checkToggle(option.key, option.value)
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
            options={optionStore.getInputOptionList}
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
            />
        </AutoComplete>
    );
})

export default SearchInput;