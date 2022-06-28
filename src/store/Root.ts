import {types, onSnapshot, Instance} from "mobx-state-tree";
import {TagStore} from "./Tag";

const RootModel = types
    .model({
        tagStore: TagStore
    })

const initialState = RootModel.create({
    tagStore: {
        selectedItems: [],
    }
});

export const rootStore = initialState;

onSnapshot(rootStore, (snapshot) => {
    console.log("Snapshot: ", snapshot);
});

export type RootInstance = Instance<typeof RootModel>;