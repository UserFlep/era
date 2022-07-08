import {types} from "mobx-state-tree"
import {Key} from "react"


const selectedItemsType = types.array(types.string)
const selectedItemType = types.maybeNull(types.string)
export const TagStore:any = types
    .model({
        selectedItems: selectedItemsType,   //Для multiple TreeSelect
        selectedItem: selectedItemType      //Для single TreeSelect
    })
    .actions(self => ({
        setSelectedList(selectedItems: string[]){
            self.selectedItems = selectedItemsType.create(selectedItems)
        },
        clearSelectedList(){
            self.selectedItems.clear()
        },
        setSelectedItem(selectedItem: string){
            self.selectedItem = selectedItemType.create(selectedItem)
        },
        clearSelectedItem(){
            self.selectedItem = null
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
