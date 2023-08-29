import { ADD_ITEM, DELETE_ITEM, CLEAR_CART } from "./actions"



export const reducer = (state, action) =>{
    if(action.type === ADD_ITEM){
        const result = state.cart.find((item)=>{
            return item._id === action.payload._id
        })

        if (result) return state
        return {...state,cart:[...state.cart, action.payload]}
    }

    if(action.type === DELETE_ITEM){
        const newCart = state.cart.filter((item)=>{
            return item._id !== action.payload
        })

        return {...state, cart:newCart}
    }

}