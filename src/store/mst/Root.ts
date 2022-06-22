import {types, onSnapshot, Instance} from "mobx-state-tree";
import { createContext, useContext } from "react";
import {OptionStore} from "./Option";
import {useQuery} from "@apollo/client";
import {GET_TAGS} from "../../requests/option/Query";

// const { loading, error, data } = useQuery(GET_TAGS, {
//     fetchPolicy: 'network-only', // Used for first execution
//     nextFetchPolicy: 'cache-first', // Used for subsequent executions
// });

const RootModel = types
    .model({
        optionStore: OptionStore
    })

let initialState = RootModel.create({
    optionStore: {
        optionList: {},
        optionBlocksList: {}
    }
});

export const rootStore = initialState;

onSnapshot(rootStore, (snapshot) => {
    console.log("Snapshot: ", snapshot);
});

export type RootInstance = Instance<typeof RootModel>;

const RootStoreContext = createContext<null | RootInstance>(null);

export const Provider = RootStoreContext.Provider;
export function useMst() {
    const store = useContext(RootStoreContext);
    if (store === null) {
        throw new Error("Store не может быть пустым, добавь context provider");
    }
    return store;
}