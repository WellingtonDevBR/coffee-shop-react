import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
import { Items } from './components/CartItems'
import { Form } from './components/Form'
import { Payments } from './components/Payments'
import { CartContainer, EmptyCartContainer } from './styles'

export function Cart() {
  const { cart } = useContext(CartContext)
  return (
    <>
      {cart.length > 0 ? (
        <CartContainer>
          <Form />
          <Items />
          <Payments />
        </CartContainer>
      ) : (
        <EmptyCartContainer>
          <h1>Seu carrinho está vázio</h1>
          <span>
            Aparentemente você ainda não adicionou nenhum café delicioso ao seu
            carrinho. Que tal dar uma olhada em nossa loja?
            <h2>
              <NavLink to="/"> Clique aqui</NavLink>
            </h2>
          </span>
        </EmptyCartContainer>
      )}
    </>
  )
}
