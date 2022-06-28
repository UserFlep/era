import {Key} from "react";

export interface IOption {
    key: Key,
    title: string,
    children?: IOption[],
}

export interface ITagResponse {
    id: Key,
    name: string,
    parentId?: Key | null
}

