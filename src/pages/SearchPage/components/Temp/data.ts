type id = string | number

interface IOption {
    id: id,
    name: string,
    options?: IOption[] | [] | null | undefined
}

interface IForce {
    forceName: string
    data: IOption[]
}

interface ITagResponce {
    id: id,
    name: string,
    parent?: ITagResponce | null
}

interface IResponce {
    data: {
        tags: ITagResponce[]
    }
}

export const responce:IResponce = {
    "data": {
        "tags": [
            {
                "id": "1",
                "name": "Морское базирование",
                "parent": null
            },
            {
                "id": "2",
                "name": "Сухопутное базирование",
                "parent": null
            },
            {
                "id": "3",
                "name": "Воздушное базирование",
                "parent": null
            },
            {
                "id": "4",
                "name": "Авианосец",
                "parent": {
                    "id": "1",
                    "name": "Морские"
                }
            },
            {
                "id": "5",
                "name": "Десантный корабль",
                "parent": {
                    "id": "1",
                    "name": "Морские"
                }
            },
            {
                "id": "6",
                "name": "Патрульный корабль",
                "parent": {
                    "id": "1",
                    "name": "Морские"
                }
            },
            {
                "id": "7",
                "name": "Эскадренный миноносец (Эсминец)",
                "parent": {
                    "id": "1",
                    "name": "Морские"
                }
            },
            {
                "id": "8",
                "name": "Корабль противоминной обороны",
                "parent": {
                    "id": "1",
                    "name": "Морские"
                }
            },
            {
                "id": "9",
                "name": "Подводная лодка",
                "parent": {
                    "id": "1",
                    "name": "Морские"
                }
            },
            {
                "id": "10",
                "name": "Бронетехника",
                "parent": {
                    "id": "2",
                    "name": "Сухопутные"
                }
            },
            {
                "id": "11",
                "name": "Транспорт",
                "parent": {
                    "id": "2",
                    "name": "Сухопутные"
                }
            },
            {
                "id": "12",
                "name": "Ракетный комплекс",
                "parent": {
                    "id": "2",
                    "name": "Сухопутные"
                }
            },
            {
                "id": "13",
                "name": "Артиллерия",
                "parent": {
                    "id": "2",
                    "name": "Сухопутные"
                }
            },
            {
                "id": "14",
                "name": "Средство ПВО и ПРО",
                "parent": {
                    "id": "2",
                    "name": "Сухопутные"
                }
            },
            {
                "id": "15",
                "name": "Санитарная машина",
                "parent": {
                    "id": "2",
                    "name": "Сухопутные"
                }
            },
            {
                "id": "16",
                "name": "Средство разведки и целеуказния",
                "parent": {
                    "id": "2",
                    "name": "Сухопутные"
                }
            },
            {
                "id": "17",
                "name": "Инженерно-сапёрная техника",
                "parent": {
                    "id": "2",
                    "name": "Сухопутные"
                }
            },
            {
                "id": "18",
                "name": "Танк",
                "parent": {
                    "id": "10",
                    "name": "Бронетехника"
                }
            },
            {
                "id": "19",
                "name": "Боевая машина пехоты(БМП)",
                "parent": {
                    "id": "10",
                    "name": "Бронетехника"
                }
            },
            {
                "id": "20",
                "name": "Бронетранспортёр(БТР)",
                "parent": {
                    "id": "10",
                    "name": "Бронетехника"
                }
            },
            {
                "id": "21",
                "name": "Автомобиль",
                "parent": {
                    "id": "11",
                    "name": "Транспорт"
                }
            },
            {
                "id": "22",
                "name": "Грузовик",
                "parent": {
                    "id": "11",
                    "name": "Транспорт"
                }
            },
            {
                "id": "23",
                "name": "Ударный",
                "parent": {
                    "id": "12",
                    "name": "Ракетный комплекс"
                }
            },
            {
                "id": "24",
                "name": "Cпециального применения",
                "parent": {
                    "id": "12",
                    "name": "Ракетный комплекс"
                }
            },
            {
                "id": "25",
                "name": "Тактический",
                "parent": {
                    "id": "23",
                    "name": "Ударный"
                }
            },
            {
                "id": "26",
                "name": "Оперативно-тактический",
                "parent": {
                    "id": "23",
                    "name": "Ударный"
                }
            },
            {
                "id": "27",
                "name": "Стратегический",
                "parent": {
                    "id": "23",
                    "name": "Ударный"
                }
            },
            {
                "id": "28",
                "name": "Зенитный",
                "parent": {
                    "id": "24",
                    "name": "Cпециального применения"
                }
            },
            {
                "id": "29",
                "name": "Противоракетный",
                "parent": {
                    "id": "24",
                    "name": "Cпециального применения"
                }
            },
            {
                "id": "30",
                "name": "Противотанковый",
                "parent": {
                    "id": "24",
                    "name": "Cпециального применения"
                }
            },
            {
                "id": "31",
                "name": "Противокорабельный",
                "parent": {
                    "id": "24",
                    "name": "Cпециального применения"
                }
            },
            {
                "id": "32",
                "name": "Противолодочный",
                "parent": {
                    "id": "24",
                    "name": "Cпециального применения"
                }
            },
            {
                "id": "33",
                "name": "Самоходная артиллерийская установка",
                "parent": {
                    "id": "13",
                    "name": "Артиллерия"
                }
            },
            {
                "id": "34",
                "name": "Буксируемая артиллерийская установка (гаубица)",
                "parent": {
                    "id": "13",
                    "name": "Артиллерия"
                }
            },
            {
                "id": "35",
                "name": "Реактивная система залпового огня",
                "parent": {
                    "id": "13",
                    "name": "Артиллерия"
                }
            },
            {
                "id": "36",
                "name": "Миномёт",
                "parent": {
                    "id": "13",
                    "name": "Артиллерия"
                }
            },
            {
                "id": "37",
                "name": "Самолет",
                "parent": {
                    "id": "3",
                    "name": "Воздушные"
                }
            },
            {
                "id": "38",
                "name": "Вертолет",
                "parent": {
                    "id": "3",
                    "name": "Воздушные"
                }
            },
            {
                "id": "39",
                "name": "БПЛА",
                "parent": {
                    "id": "3",
                    "name": "Воздушные"
                }
            },
            {
                "id": "40",
                "name": "Военно-транспортный",
                "parent": {
                    "id": "37",
                    "name": "Самолет"
                }
            },
            {
                "id": "41",
                "name": "Разведывательный",
                "parent": {
                    "id": "37",
                    "name": "Самолет"
                }
            },
            {
                "id": "42",
                "name": "Радиоэлектронной борьбы",
                "parent": {
                    "id": "37",
                    "name": "Самолет"
                }
            },
            {
                "id": "43",
                "name": "Учебно-тренировочный",
                "parent": {
                    "id": "37",
                    "name": "Самолет"
                }
            },
            {
                "id": "44",
                "name": "Заправщик",
                "parent": {
                    "id": "37",
                    "name": "Самолет"
                }
            },
            {
                "id": "45",
                "name": "Боевой",
                "parent": {
                    "id": "37",
                    "name": "Самолет"
                }
            },
            {
                "id": "46",
                "name": "Метеорологический",
                "parent": {
                    "id": "37",
                    "name": "Самолет"
                }
            },
            {
                "id": "47",
                "name": "Бомбардировщик",
                "parent": {
                    "id": "45",
                    "name": "Боевой"
                }
            },
            {
                "id": "48",
                "name": "Истребитель",
                "parent": {
                    "id": "45",
                    "name": "Боевой"
                }
            },
            {
                "id": "49",
                "name": "Штурмовик",
                "parent": {
                    "id": "45",
                    "name": "Боевой"
                }
            },
            {
                "id": "50",
                "name": "Боевой",
                "parent": {
                    "id": "38",
                    "name": "Вертолет"
                }
            },
            {
                "id": "51",
                "name": "Грузовой",
                "parent": {
                    "id": "38",
                    "name": "Вертолет"
                }
            },
            {
                "id": "52",
                "name": "Радиоэлектронной борьбы",
                "parent": {
                    "id": "38",
                    "name": "Вертолет"
                }
            },
            {
                "id": "53",
                "name": "Универсальный",
                "parent": {
                    "id": "38",
                    "name": "Вертолет"
                }
            },
            {
                "id": "54",
                "name": "Поисково-спасательный",
                "parent": {
                    "id": "38",
                    "name": "Вертолет"
                }
            },
            {
                "id": "55",
                "name": "Учебно-тренировочный",
                "parent": {
                    "id": "38",
                    "name": "Вертолет"
                }
            },
            {
                "id": "56",
                "name": "Тейлситтер",
                "parent": {
                    "id": "39",
                    "name": "БПЛА"
                }
            },
            {
                "id": "57",
                "name": "Автожир",
                "parent": {
                    "id": "39",
                    "name": "БПЛА"
                }
            },
            {
                "id": "58",
                "name": "Коптер (мультикоптер)",
                "parent": {
                    "id": "39",
                    "name": "БПЛА"
                }
            },
            {
                "id": "59",
                "name": "Барражирующий боеприпас",
                "parent": {
                    "id": "39",
                    "name": "БПЛА"
                }
            }
        ]
    }
}


const getChildren = (res:IResponce,tag:ITagResponce):ITagResponce[] | undefined=>{
    return res?.data?.tags?.filter((el:ITagResponce)=>el?.parent?.id === tag?.id)
}

const getOptions = (res:IResponce,tag:ITagResponce):IOption[] | undefined=>{
    const options: IOption[] = []
    const children = getChildren(res,tag)
    if(children !== null){
        children?.map(child=>options.push({id: child.id, name: child.name, options: getOptions(res,child)}))
    }
    return options
}

const getBlocksFromResponce = (res:IResponce)=>{
    const tagBlocks:IForce[]=[]

    for(const tag of res.data.tags){
        if(tag?.parent === null) {
            const children = getChildren(responce, tag)
            if (children?.length===0) {
                tagBlocks.push({forceName: tag.name, data: []})
                continue
            }
            const tagBlock: IForce = {
                forceName: tag.name,
                // @ts-ignore
                data: children?.map((child) => ({id: child.id, name: child.name, options: getOptions(responce, child)}))

            }
            tagBlocks.push(tagBlock)
        }
    }
    return tagBlocks
}


export type {
    id,
    IOption,
    IForce,
    ITagResponce,
    IResponce
}
export const forceBlocks:IForce[] = getBlocksFromResponce(responce)



