import {types} from "mobx-state-tree"
import {Key} from "react"
// import {IOption} from "../../types/option"

export const Option:any = types
    .model({
        key: types.identifier,
        title: types.optional(types.string, ""),
        checked: types.optional(types.boolean, false),
        children: types.maybe(types.map(types.reference(types.late(() => Option)))),
    })
    .actions(self => ({
        setTitle(newTitle: string){
            self.title = newTitle
        },
        toggle(){
            self.checked = !self.checked
        },
    }))

export const OptionBlock = types
    .model({
        key: types.identifier,
        forceName: types.optional(types.string, ""),
        options: types.maybe(types.map(types.reference(types.late(() => Option)))),
    })
    .actions(self => ({
        setForceName(newName: string){
            self.forceName = newName
        },
    }))

export const OptionStore = types
    .model({
        optionList: types.optional(types.map(types.reference(types.late(() => Option))),{}),
        optionBlocksList: types.optional(types.map(types.reference(types.late(() => OptionBlock))),{}),
    })
    .actions(self => ({
        addOption(title: string, parentId: Key){
            //Добавляется запрос асинхронно в бд
            //Делается получения response-а
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
        get getOptionList(){
            return self.optionList;
        },
        get getOptionBlocksList(){
            return self.optionBlocksList;
        },
    }))
