import {Key} from "react";

export interface IOption {
    key: Key,
    title: string,
    children?: IOption[]
}

export interface ICheck {
    key: Key,
    checked: boolean
}

export interface IForce {
    forceName: string
    options: IOption[]
}

export interface ITagResponse {
    id: Key,
    name: string,
    parentId?: Key | null
}

export interface IResponse {
    data: {
        tags: ITagResponse[]
    }
}
