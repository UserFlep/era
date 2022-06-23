import {types} from "mobx-state-tree"
import {Key} from "react"
import {getBlocksFromResponse, ITagResponse} from "../../pages/SearchPage/components/data";

// export const Option:any = types
//     .model({
//         key: types.identifier,
//         title: types.optional(types.string, ""),
//         children: types.maybe(types.map(types.reference(types.late(() => Option)))),
//     })
//     .actions(self => ({
//         setTitle(newTitle: string){
//             self.title = newTitle
//         },
//     }))


// children: types.maybe(types.array(types.reference(types.late(() => Option)))),
export const Option:any = types
    .model({
        key: types.identifier,
        title: types.optional(types.string, ""),
        checked: types.optional(types.boolean, false),
        children: types.maybe(types.array(types.reference(types.late(() => Option)))),
    })
    .actions(self => ({
        setTitle(newTitle: string){
            self.title = newTitle
        },
        toggle(){
            self.checked = !self.checked
        },
    }))

export const OptionBlock:any = types
    .model({
        key: types.identifier,
        forceName: types.optional(types.string, ""),
        options: types.maybe(types.array(Option)),
    })
    .actions(self => ({
        setForceName(newName: string){
            self.forceName = newName
        },
    }))

export const OptionStore:any = types
    .model({
        optionBlocksList: types.optional(types.array(OptionBlock),[]),
    })
    .actions(self => ({
        setOptionBlocksList(dbOptions: ITagResponse[]){
            console.log("53 Options.ts mst",getBlocksFromResponse(dbOptions))
            // self.optionBlocksList.clear()
            const dbBlocks = getBlocksFromResponse(dbOptions)
            self.optionBlocksList.push({key: dbBlocks[1].key, forceName:dbBlocks[1].forceName, options:dbBlocks[1].options})
            // dbBlocks.forEach(({key, forceName,options})=>{
            //     console.log("begin")
            // self.optionBlocksList.push({key, forceName, options})
            //     console.log("end")
            // })
        },
        addOption(title: string, parentId: Key){
            //Добавляется запрос асинхронно в бд
            //Делается получения response-а (dbOptions)
        },
        removeOption(id: Key){
            //Добавляется запрос асинхронно в бд
            //Делается получения response-а
        },
        updateOption(id: Key, newTitle: string){
            //Добавляется запрос асинхронно в бд
            //Делается получения response-а
        }
    }))
    .views(self => ({
        get getOptionBlocksList(){
            return self.optionBlocksList;
        },
    }))
