import { createContext, useReducer } from "react"
import DarkModeReducer from "./darkModeReducer";

const INITIALL_STATE = {
    darkMode: false 
}

export const DarkModeContext = createContext(INITIALL_STATE)

export const DarkModeContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(DarkModeReducer, INITIALL_STATE);

    return (
        <DarkModeContext.Provider value={{darkMode: state.darkMode, dispatch }}>
            {children}
        </DarkModeContext.Provider>
    )
}