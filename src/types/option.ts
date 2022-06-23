import {Key} from "react";

export interface IOption {
    key: Key,
    title: string,
    checked: boolean,
    children?: IOption[],
}

export interface IForce {
    key: Key
    forceName: string
    options?: IOption[]
}

export interface ITagResponse {
    id: Key,
    name: string,
    parentId?: Key | null
}

