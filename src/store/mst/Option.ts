import {types} from "mobx-state-tree"
import {Key} from "react"

export const CheckItem = types
    .model({
        key: types.identifier,
        checked: types.optional(types.boolean, false),
    })
    .actions(self => ({
        toggle(){
            self.checked = !self.checked
        },
    }))

export const Option:any = types
    .model({
        key: types.identifier,
        title: types.optional(types.string, ""),
        children: types.maybe(types.map(types.reference(types.late(() => Option)))),
    })
    .actions(self => ({
        setTitle(newTitle: string){
            self.title = newTitle
        },
    }))

export const OptionBlock = types
    .model({
        key: types.identifier,
        forceName: types.optional(types.string, ""),
        options: types.maybe(types.map(Option)),
    })
    .actions(self => ({
        setForceName(newName: string){
            self.forceName = newName
        },
    }))

export const OptionStore = types
    .model({
        checkList: types.optional(types.map(CheckItem), {}),
        optionList: types.optional(types.array(Option),[]),
        optionBlocksList: types.optional(types.map(OptionBlock),{}),
    })
    .actions(self => ({
        setOptionsList(dbOptions: any){
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
        get getCheckList(){
            return self.checkList;
        },
        get getOptionList(){
            return self.optionList;
        },
        get getOptionBlocksList(){
            return self.optionBlocksList;
        },
    }))
