import React, {createContext} from 'react'
import checkStore from "../store/checkStore";
import fileStore from "../store/fileStore";
import {useLocalObservable} from "mobx-react-lite";

const storeContext = createContext(null)

export const StoreProvider = ({children}) => {
    const store = useLocalObservable(()=>({
        checkStore,
        fileStore
    }))

    return  <storeContext.Provider value={store}>
        {children}
    </storeContext.Provider>
}

export const useStore = () => React.useContext(storeContext)