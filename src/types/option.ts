import React, {Key} from "react";

export interface IOption {
    key: Key,
    title: string,
    checked?: boolean
    children?: IOption[]
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
