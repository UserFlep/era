import React, {FC} from 'react';
import {observer} from "mobx-react-lite";
import {useStore} from "../../../context";
import {Button, Tag, Tooltip, Typography} from "antd";
import classes from "./styles/tag-list.module.less";
import {blue} from "@ant-design/colors";
import {CloseCircleFilled} from "@ant-design/icons";

interface IProps {
    prefix?: string
}

const TagList: FC<IProps> = observer(({prefix="Ключевые слова:"}) => {

    const {checkStore} = useStore()
    const {checkedList, setCheckedList} = checkStore

    const tagCloseHandler = (removedTag: string) => {
        setCheckedList(checkedList.filter((el:string) => el !== removedTag))
    }

    return (
        <div style={{height: 24}}>
            {!!checkedList.length ?
                <Typography.Text type="secondary" >{prefix + " "}</Typography.Text>
                :
                null
            }
            {checkedList.map((tag: string, index: number) => {
                const isLongTag = tag.length > 20;
                const tagElement = (
                    <Tag
                        key={tag}
                        className={classes.tag}
                        color={blue.primary}
                        closable
                        onClose={() => tagCloseHandler(tag)}
                    >
                        {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                    </Tag>
                )
                return isLongTag
                    ? <Tooltip key={tag} title={tag}>{tagElement}</Tooltip>
                    : tagElement;
            })}
            {/*  Кнопка очистки  */}
            {!!checkedList.length &&
                <Button
                    type="link"
                    size="small"
                    icon={<CloseCircleFilled className={classes.btnIcon}/>}
                    onClick={() => setCheckedList([])}
                />
            }
        </div>
    )
})

export default TagList;