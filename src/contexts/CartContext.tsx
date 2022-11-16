import { createContext, ReactNode, useReducer } from 'react'
import {
  addNewItemToCartAction,
  decreaseItemQuantityAction,
  increaseItemQuantityAction,
  removeItemFromCartAction,
} from '../reducers/cart/action'
import { cartReducer, cartItem } from '../reducers/cart/reducer'

interface CartContextProviderProps {
  children: ReactNode
}

interface CycleContextType {
  cart: cartItem[]
  addNewItemToCart: (item: cartItem) => void
  removeItemFromCart: (item: cartItem) => void
  increaseItemQuantity: (item: cartItem) => void
  decreaseItemQuantity: (item: cartItem) => void
}

export const CartContext = createContext({} as CycleContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartObject, dispatch] = useReducer(cartReducer, {
    cart: [],
  })
  const { cart } = cartObject

  function addNewItemToCart(item: cartItem) {
    dispatch(addNewItemToCartAction(item))
  }

  function removeItemFromCart(item: cartItem) {
    dispatch(removeItemFromCartAction(item))
  }

  function increaseItemQuantity(item: cartItem) {
    dispatch(increaseItemQuantityAction(item))
  }

  function decreaseItemQuantity(item: cartItem) {
    dispatch(decreaseItemQuantityAction(item))
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addNewItemToCart,
        removeItemFromCart,
        increaseItemQuantity,
        decreaseItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
