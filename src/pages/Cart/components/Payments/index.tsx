import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { PaymentContainer } from './styles'

export function Payments() {
  return (
    <PaymentContainer>
      <footer>
        <span>
          <CurrencyDollar size={22} color="#8047F8" />
          Pagamento
          <p>O pagamento é feito na entrega.Escolha a forma que deseja pagar</p>
        </span>
        <div>
          <button>
            <label>
              <CreditCard size={16} color="#8047F8" />
              CARTÃO DE CRÉDITO
            </label>
          </button>
          <button>
            <label>
              <Bank size={16} color="#8047F8" />
              CARTÃO DE DÉBITO
            </label>
          </button>
          <button>
            <label>
              <Money size={16} color="#8047F8" />
              DINHEIRO
            </label>
          </button>
        </div>
      </footer>
    </PaymentContainer>
  )
}
