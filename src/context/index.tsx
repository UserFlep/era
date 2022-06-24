import React, {createContext, FC, useContext} from 'react'
import {RootInstance, rootStore} from "../store/Root";


const RootStoreContext = createContext<null | RootInstance>(null);

export function useMst() {
    const store = useContext(RootStoreContext);
    if (store === null) {
        throw new Error("Store не может быть пустым, добавь context provider");
    }
    return store;
}

export const MSTProvider:FC<any> = ({children}) => {
    return (
        <RootStoreContext.Provider value={rootStore}>
            {children}
        </RootStoreContext.Provider>
    )
}