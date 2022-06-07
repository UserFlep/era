import {makeAutoObservable} from "mobx";
import {nanoid} from "nanoid";
import {id, IOption, IBlock} from "./types"

class checkStore {
    checkBlocks: IBlock[] = [
            {
                id: 1,
                name: "Вид войск",
                options: [
                    { id: 11, value: "Сухопутные войска"},
                    { id: 12, value: "Воздушно-космические силы"},
                    { id: 13, value: "Военно-морской флот"},
                ]
            },
            {
                id: 2,
                name: "Инфраструктура и ландшафт",
                options: [
                    {id: 21, value: "Дороги"},
                    {id: 22, value: "Аэродромы"},
                    {id: 23, value: "Строения"},
                    {id: 24, value: "Морские порты"},
                    {id: 25, value: "Реки"},
                    {id: 26, value: "Горы"},
                ]
            },
            {
                id: 3,
                name: "Образцы",
                options: [
                    {id: 31, value: "Танки"},
                    {id: 32, value: "Самолеты"},
                    {id: 33, value: "Вертолеты"},
                    {id: 34, value: "Корабли"},
                    {id: 35, value: "Пехота"},
                    {id: 36, value: "БМП"}
                ]
            },
            {
                id: 4,
                name: "Характер",
                options: [
                    {id: 41, value: "Видимый свет"},
                    {id: 42, value: "ИК – диапазон"},
                    {id: 43, value: "Ультрафиолетовое излучение"},
                    {id: 44, value: "Радиолокационные портреты"},
                    {id: 45, value: "Векторные изображения"},
                    {id: 46, value: "3D модели"}
                ]
            },
            {
                id: 5,
                name: "Прочие",
                options: []
            }
        ]


    // ["", "",...]
    checkedList:string[]=[]


    constructor() {
        makeAutoObservable(this)
    }

    get getCheckBlocks(){
        return this.checkBlocks
    }

    get getOtherBlockIndex(){
        return this.checkBlocks.findIndex(block=>block.name === "Прочие")
    }

    get getOptionList(){ 
        const optionList:IOption[]=[]
        this.checkBlocks.map(
            (block: IBlock) => block.options.forEach((option: IOption):void => {
                optionList.push(option)
            })
        )
        return optionList
    }

    get getCheckedList(){
        return this.checkedList
    }

    setCheckedList=(newCheckedList: string[])=>{
        this.checkedList = newCheckedList
    }

    addOption=(value: string)=>{
        const id=nanoid()
        const index = this.getOtherBlockIndex
        this.checkBlocks[index].options.push({ id, value })
        this.checkedList.push(value)
    }

    removeOption=(id: id)=>{

        const blockIndex = this.getOtherBlockIndex
        const optionIndex = this.checkBlocks[blockIndex].options.findIndex(option=>option.id===id)

        this.checkBlocks[blockIndex].options.splice(optionIndex, 1)
    }
}

export default new checkStore();
