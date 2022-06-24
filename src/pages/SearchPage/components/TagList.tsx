import React, {FC} from 'react';
import {observer} from "mobx-react-lite";
import {values} from "mobx";
import {Button, Tag, Tooltip, Typography} from "antd";
import classes from "./styles/tag-list.module.less";
import {blue} from "@ant-design/colors";
import {CloseCircleFilled} from "@ant-design/icons";
import {useMst} from "../../../context"

interface IProps {
    prefix?: string
}

const TagList: FC<IProps> = observer(({prefix="Ключевые слова:"}) => {

    const {optionStore} = useMst()

    const tagCloseHandler = (tag: any) => {
        optionStore.checkToggle(tag.key, tag.title)
    }

    return (
        <div style={{minHeight: 24}}>
            {!!optionStore.checkedList.size ?
                <Typography.Text type="secondary" >{prefix + " "}</Typography.Text>
                :
                null
            }
            {values(optionStore.checkedList).map((tag:any) => {
                const isLongTag = tag.title.length > 20;
                const tagElement = (
                    <Tag
                        key={tag.key}
                        className={classes.tag}
                        color={blue.primary}
                        closable
                        onClose={() => tagCloseHandler(tag)}
                    >
                        {isLongTag ? `${tag.title.slice(0, 20)}...` : tag.title}
                    </Tag>
                )
                return isLongTag
                    ? <Tooltip key={tag.key} title={tag.title}>{tagElement}</Tooltip>
                    : tagElement;
            })}

            {/*  Кнопка очистки  */}
            {!!optionStore.checkedList.size &&
                <Button
                    type="link"
                    size="small"
                    icon={<CloseCircleFilled className={classes.btnIcon}/>}
                    onClick={() => optionStore.clearOptionList()}
                />
            }
        </div>
    )
})

export default TagList;