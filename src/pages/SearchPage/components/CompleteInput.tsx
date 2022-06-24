import {observer} from "mobx-react-lite";
import {useStore} from "../../../context";
import React, {FC, ReactNode} from "react";
import {AutoComplete, Input} from "antd";
import classes from "./styles/complete-input.module.less";
import {ITagResponse} from "../../../types/option";
import {useMst} from "../../../store/mst/Root";

interface IProps {
    enterButton?: ReactNode
}

const CompleteInput: FC<IProps> = observer(({enterButton, ...params})=>{
    const {checkStore} = useStore()
    const {getOptionList, checkedList, setCheckedList} = checkStore


    // const [completeValue, setCompleteValue] = React.useState('')

    const {optionStore} = useMst()

    const filterOption: any = (inputValue: string, option:ITagResponse): boolean => {
        return option!.name.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    }

    // const selectHandler = (data: string) => {
    //     console.log("selectHandler")
    //     if (checkedList.indexOf(data) === -1)
    //         setCheckedList([...checkedList, data])
    //     setCompleteValue('')
    // }

    // const changeHandler = (data: string) => {
    //     if (data !== completeValue)
    //         setCompleteValue(data)
    // }

    return (
        <AutoComplete
            className={classes.aComplete}
            // value={completeValue}
            options={optionStore.getOptionList}
            filterOption={filterOption}
            // onSelect={selectHandler}
            // onChange={changeHandler}
            {...params}
        >
            <Input.Search
                style={{borderRadius: 8}}
                placeholder={"Выберите ключевое слово"}
                size="large"
                enterButton={enterButton ? enterButton : true }
            />
        </AutoComplete>
        // <AutoComplete
        //     className={classes.aComplete}
        //     value={completeValue}
        //     options={completeValue.length !== 0 && getOptionList}
        //     filterOption={filterOption}
        //     onSelect={selectHandler}
        //     onChange={changeHandler}
        //     {...params}
        // >
        //     <Input.Search
        //         style={{borderRadius: 8}}
        //         placeholder={"Выберите ключевое слово"}
        //         size="large"
        //         enterButton={enterButton ? enterButton : true }
        //     />
        // </AutoComplete>
    );
})

export default CompleteInput;