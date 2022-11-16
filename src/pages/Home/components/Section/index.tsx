import { Coffee, Package, ShoppingCartSimple, Timer } from 'phosphor-react'
import { ContentAdvantages, SectionContainer, SectionLeft } from './styles'
import Poster from '../../../../assets/Poster.svg'

export function Section() {
  return (
    <SectionContainer>
      <SectionLeft>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <ContentAdvantages>
          <div>
            <span>
              <ShoppingCartSimple size={22} color="white" weight="fill" />
            </span>
            Compra simples e segura
          </div>
          <div>
            <span>
              <Timer size={22} color="white" weight="fill" />
            </span>
            Entrega rápida e rastreada
          </div>
          <div>
            <span>
              <Package size={22} color="white" weight="fill" />
            </span>
            Embalagem mantém o café intacto
          </div>
          <div>
            <span>
              <Coffee size={22} color="white" weight="fill" />
            </span>
            O café chega fresquinho até você
          </div>
        </ContentAdvantages>
      </SectionLeft>
      <img src={Poster} alt="Poster" />
    </SectionContainer>
  )
}
