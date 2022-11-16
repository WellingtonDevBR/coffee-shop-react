import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../../../contexts/CartContext'
import {
  CartAmountCalculator,
  CartItemsContainer,
  CoffeeCartCard,
} from './styles'

export function Items() {
  const {
    cart,
    removeItemFromCart,
    decreaseItemQuantity,
    increaseItemQuantity,
  } = useContext(CartContext)

  const subTotal = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0)
  const deliveryFee = 5
  const grandTotal = subTotal + deliveryFee

  function handleRemoveItemFromCart(item: any) {
    removeItemFromCart(item)
  }

  function handleDecreaseItemQuantity(item: any) {
    decreaseItemQuantity(item)
  }

  function handleIncreaseItemQuantity(item: any) {
    increaseItemQuantity(item)
  }

  return (
    <CartItemsContainer>
      <h3>Cafés Selecionados</h3>
      <main>
        {cart.map((coffee, index) => {
          return (
            <CoffeeCartCard key={index}>
              <img src={coffee.img} alt={coffee.description} />
              <div>
                <span>{coffee.title}</span>
                <div>
                  <button onClick={() => handleDecreaseItemQuantity(coffee)}>
                    -
                  </button>
                  <span>{coffee.quantity}</span>
                  <button onClick={() => handleIncreaseItemQuantity(coffee)}>
                    +
                  </button>
                  <label onClick={() => handleRemoveItemFromCart(coffee)}>
                    <Trash size={16} color="#8047F8" />
                    Remover
                  </label>
                </div>
              </div>
              <span>R$ {coffee.price.toFixed(2)}</span>
            </CoffeeCartCard>
          )
        })}

        <CartAmountCalculator>
          <div>
            <span>Valor total dos items</span>
            <span>R$ {subTotal.toFixed(2)}</span>
          </div>
          <div>
            <span>Entrega</span>
            <span>R$ {deliveryFee.toFixed(2)}</span>
          </div>
          <div>
            <span>Total</span>
            <span>R$ {grandTotal.toFixed(2)}</span>
          </div>
          <NavLink to={'/order-confirmation'}>
            <button>CONFIRMAR PEDIDO</button>
          </NavLink>
        </CartAmountCalculator>
      </main>
    </CartItemsContainer>
  )
}
