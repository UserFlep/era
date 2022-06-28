import {types, onSnapshot, Instance} from "mobx-state-tree";
import {OptionStore} from "./Option";

const RootModel = types
    .model({
        optionStore: OptionStore
    })

const initialState = RootModel.create({
    optionStore: {
        checkedList: {},
        optionList: [],
    }
});

export const rootStore = initialState;

onSnapshot(rootStore, (snapshot) => {
    console.log("Snapshot: ", snapshot);
});

export type RootInstance = Instance<typeof RootModel>;