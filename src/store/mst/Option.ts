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


export const Check:any = types
    .model({
        id: types.identifier,
        name: types.string,
    })


export const Option:any = types
    .model({
        id: types.identifier,
        name: types.string,
        parentId: types.maybeNull(types.string),
    })
    .actions(self => ({
        setName(newName: string){
            self.name = newName
        },
    }))

export const OptionStore:any = types
    .model({
        checkList: types.optional(types.map(Check),{}),
        optionList: types.optional(types.array(Option),[]),
    })
    .actions(self => ({
        setOptionList(dbOptions: ITagResponse[]){
            self.optionList = dbOptions
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
            return getBlocksFromResponse(self.optionList)
        },
    }))
