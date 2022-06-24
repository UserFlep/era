import {IOption, IForce, ITagResponse} from "../../types/option"


const getChildren = (res:ITagResponse[],tag:ITagResponse):ITagResponse[] | undefined=>{
    return res?.filter((el:ITagResponse)=>el?.parentId === tag?.id)
}

const getOptions = (res:ITagResponse[],tag:ITagResponse):IOption[]=>{
    const options: IOption[] = []
    const children = getChildren(res,tag)
    if(children !== null){
        children?.map(child=>options.push({key: child.id, title: child.name, children: getOptions(res,child)}))
    }
    return options
}

//Главная функция
export const getBlocksFromResponse = (res:ITagResponse[])=>{
    const tagBlocks:IForce[]=[]

    for(const tag of res){
        if(tag?.parentId === null) {
            const children = getChildren(res, tag)
            if (children?.length===0) {
                tagBlocks.push({key: tag.id, forceName: tag.name, options: []})
                continue
            }
            const tagBlock: IForce = {
                key: tag.id,
                forceName: tag.name,
                options: children?.map((child) => ({key: child.id, title: child.name, children: getOptions(res, child)}))

            }
            tagBlocks.push(tagBlock)
        }
    }
    return tagBlocks
}




