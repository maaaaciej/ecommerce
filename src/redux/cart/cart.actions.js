
import CartActionTypes from "./cart.types"


export const toggleCartHidden=()=>({
type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem=(item)=>({
    type:CartActionTypes.ADD_TO_CART,
    payload:item
})

export const deleteItem = item =>({
    type: CartActionTypes.DELETE_ITEM,
    payload: item
})

export const reduceQuantity = item =>({
    type: CartActionTypes.DECREASE_QUANTITY,
    payload: item
})

export const clearCart = item =>({
    type: CartActionTypes.CLEAR_CART,
    payload:item
})