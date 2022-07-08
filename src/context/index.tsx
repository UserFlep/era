import React, {createContext, FC, useContext} from 'react'
import {storeInstance, store} from "../store/Root";


const StoreContext = createContext<null | storeInstance>(null);

export function useMst() {
    const store = useContext(StoreContext);
    if (store === null) {
        throw new Error("Store не может быть пустым, добавь context provider");
    }
    return store;
}

export const MSTProvider:FC<any> = ({children}) => {
    return (
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    )
}