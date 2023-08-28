import { ADD_ITEM, DELETE_ITEM, CLEAR_CART } from "./actions"



export const reducer = (cart, action) =>{
    console.log(cart)
    if(action.type == ADD_ITEM){
        cart = [...cart, action.payload]
    }

    return cart
}