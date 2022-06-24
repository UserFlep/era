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


export const CheckedItem:any = types
    .model({
        key: types.identifier,
        title: types.string,
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

////////////////////////////////////////////////////////////////////
const CheckedListType = types.map(CheckedItem)
const OptionListType = types.array(Option)

export const OptionStore:any = types
    .model({
        checkedList: CheckedListType,
        optionList: OptionListType,
    })
    .actions(self => ({
        checkToggle(key: any, title: string ){
            self.checkedList.has(key) ?
                self.checkedList.delete(key):
                self.checkedList.set(key, {key,title})
        },
        setOptionList(dbOptions: ITagResponse[]){
            self.optionList = OptionListType.create(dbOptions)
        },
        clearOptionList(){
            self.checkedList.clear()
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
            console.log("getOptionBlocksList")
            return getBlocksFromResponse(self.optionList)
        },
        get getCheckedList(){
            return self.checkedList
        },
        get getOptionList(){
            return self.optionList
        },

    }))
