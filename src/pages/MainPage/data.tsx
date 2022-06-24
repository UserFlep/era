import landscape from "../../images/landscape.png"
import vvst from "../../images/vvstPancir.png"
import vvstTopol from "../../images/vvstTopol.png"
import radio from "../../images/radioPort.png"
import interes from "../../images/hydroacustic.png"
import dictionary from "../../images/dictionary.png"
import audioRecord from "../../images/callRecord.png"
import textRecord from "../../images/textRec.png"
import codeLogs from "../../images/codeLogs.png"
import db from "../../images/db.png"
import nir from "../../images/nir.png"
import {ICardsBlock} from "../../types/card"



export const imageCards: ICardsBlock = {
    title: "Изображения",
    cards: [
        {
            id: "1",
            cardTitle: "Образцы ВВСТ",
            icon: vvstTopol,
        },
        {
            id: "2",
            cardTitle: "Инфраструктура и ландшафт",
            icon: landscape,
        }
    ]
}

export const radioInfoCards = {
    title: "Радиотехническая информация",
    cards: [
        {
            id: "1",
            cardTitle: "Радиотехнические портреты",
            icon: radio
        }
    ]
}

export const hydroAcousticCards = {
    title: "Гидроакустические портреты",
    cards: [
        {
            id: "1",
            cardTitle: "Образцы ВВСТ",
            icon: vvst
        },
        {
            id: "2",
            cardTitle: "Объекты интереса",
            icon: interes
        }
    ]
}

export const speechAndTextCards = {
    title: "Речевые и текстовые данные",
    cards: [
        {
            id: "1",
            cardTitle: "Словари",
            icon: dictionary
        },
        {
            id: "2",
            cardTitle: "Записи разговоров",
            icon: audioRecord
        },
        {
            id: "3",
            cardTitle: "Записи переписок",
            icon: textRecord
        },
        {
            id: "4",
            cardTitle: "Логи выполнения программ",
            icon: codeLogs
        },
        {
            id: "5",
            cardTitle: "Базы данных",
            icon: db
        },
        {
            id: "6",
            cardTitle: "НИР",
            icon: nir
        }
    ]
}