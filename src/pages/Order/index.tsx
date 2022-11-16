import { OrderContainer } from './styles'
import CoffeeDriver from '../../assets/illustration.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

export function Order() {
  return (
    <OrderContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <main>
        <section>
          <div>
            <div>
              <MapPin size={16} color="white" weight="fill" />
            </div>
            <article>
              <span>Entrega em Rua João Daniel Martinelli, 102</span>
              <p>Farrapos - Porto Alegre, RS</p>
            </article>
          </div>
          <div>
            <div>
              <Timer size={16} color="white" weight="fill" />
            </div>
            <article>
              <span>Previsão de entrega</span>
              <p>20 min - 30 min </p>
            </article>
          </div>
          <div>
            <div>
              <CurrencyDollar size={16} color="white" weight="fill" />
            </div>
            <article>
              <span>Pagamento na entrega</span>
              <p>Cartão de Crédito</p>
            </article>
          </div>
        </section>
        <img src={CoffeeDriver} alt="" />
      </main>
    </OrderContainer>
  )
}
