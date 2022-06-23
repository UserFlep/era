import {types, onSnapshot, Instance} from "mobx-state-tree";
import { createContext, useContext } from "react";
import {OptionStore} from "./Option";
//Это используется только в React компонентах
// import {useQuery} from "@apollo/client";
// import {GET_TAGS} from "../../requests/option/Query";
//
// // const { loading, error, data } = useQuery(GET_TAGS, {
// //     fetchPolicy: 'network-only', // Used for first execution
// //     nextFetchPolicy: 'cache-first', // Used for subsequent executions
// // });


//Это засунуть в компонент
// const DB_Options = fetch('http://localhost:4000/graphql', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//         },
//         body: JSON.stringify({
//             query: `
//             query Tag {
//                 tags {
//                     id
//                     name
//                     parentId
//                 }
//             }
//         `,
//         }),
//     })
//     .then((res) => res.json())
//     .then(data => data);


// console.log("УСПЕХ!!!!!!!!!!!!!!!!!!!!!!", DB_Options)

const RootModel = types
    .model({
        optionStore: OptionStore
    })

let initialState = RootModel.create({
    optionStore: {
        optionBlocksList: []
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