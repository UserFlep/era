import {types, onSnapshot, Instance} from "mobx-state-tree";
import {TagStore} from "./Tag";

const RootStore = types
    .model({
        tagStore: TagStore
    })

export const store = RootStore.create({
    tagStore: {
        selectedItems: [],
        selectedItem: null,
    }
});

onSnapshot(store, (snapshot) => {
    console.log("Snapshot: ", snapshot);
});

export type RootInstance = Instance<typeof RootStore>;