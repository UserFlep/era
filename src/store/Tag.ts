import {types} from "mobx-state-tree"
import {Key} from "react"
import {getBlocksFromResponse} from "../pages/SearchPage/data";
import {ITagResponse} from "../types/option"


const selectedItemsType = types.array(types.string)
export const TagStore:any = types
    .model({
        selectedItems: selectedItemsType
    })
    .actions(self => ({
        setSelectedList(selectedItems: string[]){
            self.selectedItems = selectedItemsType.create(selectedItems)
        },
        clearSelectedList(){
            self.selectedItems.clear()
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
        get selectedList(){
            return self.selectedItems
        },

    }))
