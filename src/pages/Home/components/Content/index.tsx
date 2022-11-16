import { useContext, useState } from 'react'
import { CartContext } from '../../../../contexts/CartContext'
import { coffeesData } from '../../../../data/coffeeData'
import { CoffeeCard } from '../CoffeeCard'
import { CoffeeListContainer, ContentContainer } from './styles'

interface CoffeeCardProps {
  img: string
  tags: string[]
  title: string
  description: string
  price: number
  quantity: number
}

export function Content() {
  const { addNewItemToCart } = useContext(CartContext)

  function handleAddToCart(coffeProps: CoffeeCardProps): void {
    addNewItemToCart(coffeProps)
  }

  return (
    <ContentContainer>
      <h2>Nossos cafés</h2>
      <CoffeeListContainer>
        {coffeesData.map((coffee) => {
          return (
            <CoffeeCard
              key={coffee.id}
              img={coffee.img}
              tags={coffee.tags}
              title={coffee.title}
              description={coffee.description}
              price={coffee.price}
              stockQuantity={coffee.stockQuantity}
              onAddToCart={handleAddToCart}
            />
          )
        })}
      </CoffeeListContainer>
    </ContentContainer>
  )
}
