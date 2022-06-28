import {IOption, ITagResponse} from "../../types/option"
import React from "react";
////////////////////////////////////////////////////////////////////////////////////////////////////////
//***ПРеобразование серверных данных в валидные для antd Tree ***
let RESPONSE_DATA: ITagResponse[] = []

const getChildren = (parentId:React.Key):IOption[]=>{
    const children: IOption[] = []
    const childrenInResponse = RESPONSE_DATA?.filter((el)=>el?.parentId === parentId)
    if(childrenInResponse!==null){
        childrenInResponse?.map(child=>children.push({key: child.id, title: child.name, children: getChildren(child.id)}))
    }
    return children;
}

//Главная функция
export const getTreeDataResponse = (res:ITagResponse[])=>{
    RESPONSE_DATA = res;
    const treeData:IOption[]=[]
    for(const tag of RESPONSE_DATA){
        if(tag?.parentId === null) {
            treeData.push({key: tag.id, title: tag.name, children: getChildren(tag.id)})
        }
    }
    return treeData
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////


