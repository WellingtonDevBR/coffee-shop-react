import { cartItem } from './reducer'

export enum ActionTypes {
  ADD_NEW_ITEM_TO_CART = 'ADD_NEW_ITEM_TO_CART',
  UPDATE_CART = 'UPDATE_CART',
  INCREASE_ITEM_QUANTITY = 'INCREASE_ITEM_QUANTITY',
  DECREASE_ITEM_QUANTITY = 'DECREASE_ITEM_QUANTITY',
  REMOVE_ITEM_FROM_CART = 'REMOVE_FROM_CART',
  CLEAR_CART = 'CLEAR_CART',
}

export function addNewItemToCartAction(newItem: cartItem) {
  return {
    type: ActionTypes.ADD_NEW_ITEM_TO_CART,
    payload: newItem,
  }
}

export function updateItemInCart(updateItem: cartItem) {
  return {
    type: ActionTypes.UPDATE_CART,
    payload: updateItem,
  }
}

export function increaseItemQuantityAction(item: cartItem) {
  return {
    type: ActionTypes.INCREASE_ITEM_QUANTITY,
    payload: item,
  }
}

export function decreaseItemQuantityAction(item: cartItem) {
  return {
    type: ActionTypes.DECREASE_ITEM_QUANTITY,
    payload: item,
  }
}

export function removeItemFromCartAction(removeItem: cartItem) {
  return {
    type: ActionTypes.REMOVE_ITEM_FROM_CART,
    payload: removeItem,
  }
}

export function clearCart() {
  return {
    type: ActionTypes.CLEAR_CART,
  }
}
