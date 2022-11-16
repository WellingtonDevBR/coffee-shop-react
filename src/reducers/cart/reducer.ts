import { ActionTypes } from './action'
import { produce } from 'immer'

export interface cartItem {
  img: string
  tags: string[]
  title: string
  description: string
  price: number
  quantity: number
}

interface CartState {
  cart: cartItem[]
}

export function cartReducer(cartArray: CartState, action: any): CartState {
  const findIndexOfExistingItem = cartArray.cart.findIndex(
    (item, index) => item.description === action.payload.description,
  )
  return produce(cartArray, (draft) => {
    switch (action.type) {
      case ActionTypes.ADD_NEW_ITEM_TO_CART: {
        if (findIndexOfExistingItem !== -1) {
          draft.cart[findIndexOfExistingItem].quantity = action.payload.quantity
        } else {
          draft.cart.push(action.payload)
        }
        break
      }
      case ActionTypes.REMOVE_ITEM_FROM_CART: {
        draft.cart.splice(findIndexOfExistingItem, 1)
        break
      }
      case ActionTypes.INCREASE_ITEM_QUANTITY: {
        draft.cart[findIndexOfExistingItem].quantity += 1
        break
      }
      case ActionTypes.DECREASE_ITEM_QUANTITY: {
        if (draft.cart[findIndexOfExistingItem].quantity === 1) return
        draft.cart[findIndexOfExistingItem].quantity -= 1
        break
      }
    }
  })
}
