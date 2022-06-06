export type id = number | string

export interface IOption{
    id: id,
    value: string
}

export interface IBlock{
    id: id,
    name: string,
    options: IOption[]
}