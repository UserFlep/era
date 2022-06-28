import {Tag, TreeSelect} from 'antd';
import React, {useEffect} from 'react';
import { getTreeDataResponse } from '../../pages/SearchPage/utils';
import {useQuery} from "@apollo/client";
import {GET_TAGS} from "../../requests/option/Query";
import {useMst} from "../../context";
import {blue} from "@ant-design/colors";

const dataResponse = [
    {
        "id": "4",
        "name": "Авианосец",
        "parentId": "1"
    },
    {
        "id": "5",
        "name": "Десантный корабль",
        "parentId": "1"
    },
    {
        "id": "6",
        "name": "Патрульный корабль",
        "parentId": "1"
    },
    {
        "id": "7",
        "name": "Эскадренный миноносец (Эсминец)",
        "parentId": "1"
    },
    {
        "id": "8",
        "name": "Корабль противоминной обороны",
        "parentId": "1"
    },
    {
        "id": "9",
        "name": "Подводная лодка",
        "parentId": "1"
    },
    {
        "id": "10",
        "name": "Бронетехника",
        "parentId": "2"
    },
    {
        "id": "11",
        "name": "Транспорт",
        "parentId": "2"
    },
    {
        "id": "12",
        "name": "Ракетный комплекс",
        "parentId": "2"
    },
    {
        "id": "13",
        "name": "Артиллерия",
        "parentId": "2"
    },
    {
        "id": "14",
        "name": "Средство ПВО и ПРО",
        "parentId": "2"
    },
    {
        "id": "15",
        "name": "Санитарная машина",
        "parentId": "2"
    },
    {
        "id": "16",
        "name": "Средство разведки и целеуказния",
        "parentId": "2"
    },
    {
        "id": "17",
        "name": "Инженерно-сапёрная техника",
        "parentId": "2"
    },
    {
        "id": "18",
        "name": "Танк",
        "parentId": "10"
    },
    {
        "id": "19",
        "name": "Боевая машина пехоты(БМП)",
        "parentId": "10"
    },
    {
        "id": "20",
        "name": "Бронетранспортёр(БТР)",
        "parentId": "10"
    },
    {
        "id": "21",
        "name": "Автомобиль",
        "parentId": "11"
    },
    {
        "id": "22",
        "name": "Грузовик",
        "parentId": "11"
    },
    {
        "id": "23",
        "name": "Ударный",
        "parentId": "12"
    },
    {
        "id": "24",
        "name": "Cпециального применения",
        "parentId": "12"
    },
    {
        "id": "25",
        "name": "Тактический",
        "parentId": "23"
    },
    {
        "id": "26",
        "name": "Оперативно-тактический",
        "parentId": "23"
    },
    {
        "id": "27",
        "name": "Стратегический",
        "parentId": "23"
    },
    {
        "id": "28",
        "name": "Зенитный",
        "parentId": "24"
    },
    {
        "id": "29",
        "name": "Противоракетный",
        "parentId": "24"
    },
    {
        "id": "30",
        "name": "Противотанковый",
        "parentId": "24"
    },
    {
        "id": "31",
        "name": "Противокорабельный",
        "parentId": "24"
    },
    {
        "id": "32",
        "name": "Противолодочный",
        "parentId": "24"
    },
    {
        "id": "33",
        "name": "Самоходная артиллерийская установка",
        "parentId": "13"
    },
    {
        "id": "34",
        "name": "Буксируемая артиллерийская установка (гаубица)",
        "parentId": "13"
    },
    {
        "id": "35",
        "name": "Реактивная система залпового огня",
        "parentId": "13"
    },
    {
        "id": "36",
        "name": "Миномёт",
        "parentId": "13"
    },
    {
        "id": "37",
        "name": "Самолет",
        "parentId": "3"
    },
    {
        "id": "38",
        "name": "Вертолет",
        "parentId": "3"
    },
    {
        "id": "39",
        "name": "БПЛА",
        "parentId": "3"
    },
    {
        "id": "40",
        "name": "Военно-транспортный",
        "parentId": "37"
    },
    {
        "id": "41",
        "name": "Разведывательный",
        "parentId": "37"
    },
    {
        "id": "42",
        "name": "Радиоэлектронной борьбы",
        "parentId": "37"
    },
    {
        "id": "43",
        "name": "Учебно-тренировочный",
        "parentId": "37"
    },
    {
        "id": "44",
        "name": "Заправщик",
        "parentId": "37"
    },
    {
        "id": "45",
        "name": "Боевой",
        "parentId": "37"
    },
    {
        "id": "46",
        "name": "Метеорологический",
        "parentId": "37"
    },
    {
        "id": "47",
        "name": "Бомбардировщик",
        "parentId": "45"
    },
    {
        "id": "48",
        "name": "Истребитель",
        "parentId": "45"
    },
    {
        "id": "49",
        "name": "Штурмовик",
        "parentId": "45"
    },
    {
        "id": "50",
        "name": "Боевой",
        "parentId": "38"
    },
    {
        "id": "51",
        "name": "Грузовой",
        "parentId": "38"
    },
    {
        "id": "52",
        "name": "Радиоэлектронной борьбы",
        "parentId": "38"
    },
    {
        "id": "53",
        "name": "Универсальный",
        "parentId": "38"
    },
    {
        "id": "54",
        "name": "Поисково-спасательный",
        "parentId": "38"
    },
    {
        "id": "55",
        "name": "Учебно-тренировочный",
        "parentId": "38"
    },
    {
        "id": "56",
        "name": "Тейлситтер",
        "parentId": "39"
    },
    {
        "id": "57",
        "name": "Автожир",
        "parentId": "39"
    },
    {
        "id": "58",
        "name": "Коптер (мультикоптер)",
        "parentId": "39"
    },
    {
        "id": "59",
        "name": "Барражирующий боеприпас",
        "parentId": "39"
    },
    {
        "id": "1",
        "name": "Морское базирование",
        "parentId": null
    },
    {
        "id": "2",
        "name": "Сухопутное базирование",
        "parentId": null
    },
    {
        "id": "3",
        "name": "Воздушное базирование",
        "parentId": null
    }
]
const treeData = getTreeDataResponse(dataResponse)
const TreeSelectInput = () => {
    const {optionStore} = useMst()
    // const {loading, error, data } = useQuery(GET_TAGS);
    const [value, setValue] = React.useState<string>();

    // useEffect(()=>{
    //     if(data) {
    //         optionStore.setOptionList(data.tags)
    //     }
    //     console.log("useEffect--->Data fetching")
    // },[data, optionStore])

    const onChange = (newValue: string) => {
        console.log(newValue);
        setValue(newValue);
    };

    const tagRender = (props:any) => {
        const { label} = props;

        return (
            <Tag color={blue.primary} closable={true} style={{ marginRight: 3 }}>
                {label}
            </Tag>
        );
    }

    return (
            // error ?
            //     <span>Произошла ошибка...</span>
            //     :
                <TreeSelect
                    showSearch
                    style={{width: '100%'}}
                    value={value}
                    dropdownStyle={{maxHeight: 400, overflow: 'auto'}}
                    placeholder="Поиск по ключевым словам"
                    fieldNames={{label: "title", value: "key", children: "children"}}
                    treeData={treeData}
                    filterTreeNode
                    treeNodeFilterProp="title"
                    allowClear
                    multiple
                    tagRender={tagRender}
                    onChange={onChange}
                />
    );
};

export default TreeSelectInput;