import { ShoppingCartSimple } from 'phosphor-react'
import {
  CoffeCardFooter,
  CoffeeCardContainer,
  CoffeeStyleType,
  QuantityControllerContainer,
  UnavailableCoffee,
} from './styles'
import { useEffect, useReducer, useState } from 'react'

interface onAddtoCartProps {
  img: string
  tags: string[]
  title: string
  description: string
  price: number
  quantity: number
}

interface CoffeeCardProps {
  img: string
  tags: string[]
  title: string
  description: string
  price: number
  stockQuantity: number
  onAddToCart: (coffee: onAddtoCartProps) => void
}

enum ActionType {
  DECREMENT = 'decrement',
  INCREMENT = 'increment',
}

type Action = {
  type: ActionType
}

interface QuantityState {
  quantity: number
}

function reducer(state: QuantityState, action: Action) {
  switch (action.type) {
    case ActionType.DECREMENT:
      if (state.quantity === 0) return state
      return { quantity: state.quantity - 1 }
    case ActionType.INCREMENT:
      return { quantity: state.quantity + 1 }
    default:
      return state
  }
}

export function CoffeeCard({
  img,
  tags,
  title,
  description,
  price,
  stockQuantity,
  onAddToCart,
}: CoffeeCardProps) {
  const [isUnavailable, setIsUnavailable] = useState(false)
  const [state, dispatch] = useReducer(reducer, { quantity: 0 })

  function handleAddToCart() {
    if (stockQuantity > 0 && state.quantity > 0) {
      onAddToCart({
        img,
        tags,
        title,
        description,
        price,
        quantity: state.quantity,
      })
    }
  }

  const isAllowedToAddToCart = stockQuantity > 0 && state.quantity > 0

  useEffect(() => {
    setIsUnavailable(stockQuantity <= 0)
  }, [stockQuantity])

  return (
    <CoffeeCardContainer>
      <img src={img} alt="Coffee" />
      <CoffeeStyleType>
        {tags.map((tag) => {
          return <span key={tag}>{tag}</span>
        })}
      </CoffeeStyleType>
      <h3>{title}</h3>
      <p>{description}</p>
      {!isUnavailable ? (
        <CoffeCardFooter>
          <span>R$ {price.toFixed(2)}</span>
          <QuantityControllerContainer>
            <button onClick={() => dispatch({ type: ActionType.DECREMENT })}>
              -
            </button>
            <input readOnly value={state.quantity} />
            <button onClick={() => dispatch({ type: ActionType.INCREMENT })}>
              +
            </button>
            <button disabled={!isAllowedToAddToCart} onClick={handleAddToCart}>
              <ShoppingCartSimple weight="fill" size={22} color="#FFF" />
            </button>
          </QuantityControllerContainer>
        </CoffeCardFooter>
      ) : (
        <UnavailableCoffee>
          <span>Indisponível</span>
        </UnavailableCoffee>
      )}
    </CoffeeCardContainer>
  )
}
