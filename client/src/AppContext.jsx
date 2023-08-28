import { createContext, useReducer } from "react";
import { reducer } from "../util/reducer";
import { ADD_ITEM } from "../util/actions";

export const AppContext = createContext()

const AppContextProvider = ({children})=>{
    const [cart, dispatch] = useReducer(reducer, [])
    const addToCart = (value) => {
        dispatch({type:ADD_ITEM, payload:value})
    }
    console.log(cart)
    return(<AppContext.Provider value={{cart,addToCart}}>
        {children}
    </AppContext.Provider>)
}

export default AppContextProvider