import { createContext, useEffect, useReducer } from "react";
import { reducer } from "../util/reducer";
import { ADD_ITEM, DELETE_ITEM } from "../util/actions";

const getLocalStorage = () => {
    let cart = localStorage.getItem('cart')
    if(cart){
        return JSON.parse(cart)
    }else{
        return []
    }
}

export const AppContext = createContext()
const initialState = {
    cart: getLocalStorage(),
    total_items: 0,
    total_amount: 0,
    shipping_fee: 10,
} 




const AppContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState)
    const addToCart = (value) => {
        dispatch({type:ADD_ITEM, payload:value})
    }
    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(state.cart))
    }, [state.cart])
    const removeFromCart = (value) => {
        dispatch({type:DELETE_ITEM, payload:value})
    }
    return(<AppContext.Provider value={{state,addToCart, removeFromCart}}>
        {children}
    </AppContext.Provider>)
}

export default AppContextProvider