import {makeAutoObservable} from "mobx";
import {nanoid} from "nanoid";

class fileStore {
    files = [
        {id: "1", tags: ["Яблоко", "Банан", "Мандарин"], file:{}},
        {id: "2", tags: ["Клюква", "Апельсин", "Яблоко"], file:{}},
        {id: "3", tags: ["Мандарин"], file:{}},
    ]

    constructor() {
        makeAutoObservable(this)
    }

    getFile(id){
        const index = this.files.findIndex(file=>file.id===id)
        return this.files[index].file
    }

    getFiles(tags=[]){

        if(tags===[])
            return tags;

        let resultFiles=[]

        //*** Алгоритм поиска совпадений
        tags.forEach(searchingTag=>{
            for (let file of this.files) {
                for (let tag of file.tags) {
                    if (tag === searchingTag && !resultFiles.includes(file)) {
                        resultFiles.push(file)
                        break;
                    }
                }
            }
        })
        //***

        return resultFiles
    }

    add(file = {}, tags=[]){
        this.files.push({ id: nanoid(5), tags: tags, file: file})
    }

    remove(id){
        for (let file of this.files) {
            if (file.id === id) {
                const index = this.files.indexOf(file)
                this.files.splice(index, 1)
            }
        }
    }

    update(id, tags=[], file={}){

        const index = this.files.findIndex(file=>file.id===id)

        if(tags !== []){
            this.files[index].tags = tags
        }

        if(file !== {}){
            this.files[index].file = file
        }
    }
}

export default new fileStore()
