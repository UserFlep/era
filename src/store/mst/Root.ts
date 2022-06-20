import {types, onSnapshot, Instance} from "mobx-state-tree";
import { createContext, useContext } from "react";
import {OptionStore} from "./Option";

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