import Logo from '../../assets/Logo.svg'
import { HeaderContainer } from './styles'
import { ShoppingCartSimple, MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
export function Header() {
  const { cart } = useContext(CartContext)

  const itemsInCart = cart.reduce((acc, item) => {
    return acc + item.quantity
  }, 0)
  return (
    <HeaderContainer>
      <NavLink to={'/'}>
        <img src={Logo} alt="Logo" />
      </NavLink>
      <div>
        <span>
          <MapPin color="#8047F8" weight="fill" size={22} />
          Porto Alegre, RS
        </span>
        <NavLink to={'/cart'}>
          <button>
            <ShoppingCartSimple weight="fill" size={22} color="#C47F17" />
          </button>
          {itemsInCart > 0 && <div>{itemsInCart}</div>}
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
