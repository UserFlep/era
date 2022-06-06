import React, {createContext, FC} from 'react'
import checkStore from '../store/checkStore';
import fileStore from '../store/fileStore';
import {useLocalObservable} from "mobx-react-lite";

const StoreContext = createContext<any>(null)


export const StoreProvider:FC<any> = ({children}) => {
    const store = useLocalObservable(()=>({
        checkStore,
        fileStore
    }))

    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>

}

export const useStore = () => React.useContext(StoreContext)