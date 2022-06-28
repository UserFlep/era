import React from "react"

export interface ICard {
    id: React.Key,
    cardTitle: string,
    icon: string
}

export interface ICardsBlock {
    title: string,
    cards: ICard[]
}