type  key= string|number

export interface ICard {
    id: key,
    cardTitle: string,
    icon: string
}


export interface ICardsBlock {
    title: string,
    cards: ICard[]
}