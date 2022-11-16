import { MapPinLine } from 'phosphor-react'
import { ChangeEvent, useEffect, useState } from 'react'
import { getAxiosInstance } from '../../../../services/axios'
import { FormContainer } from './styles'

async function getAddressByCEP(cep: string) {
  return getAxiosInstance('https://viacep.com.br/ws/')
    .get(`${cep}/json/`)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      console.log(err)
    })
}

export function Form() {
  const [cep, setCep] = useState('')

  const [address, setAddress] = useState({
    cep: '',
    logradouro: '',
    complemento: '',
    bairro: '',
    localidade: '',
    uf: '',
    unidade: '',
    ibge: '',
    gia: '',
  })

  function handleCepChange(event: ChangeEvent<HTMLInputElement>) {
    setCep(event.target.value)
  }

  useEffect(() => {
    try {
      if ((!cep.includes('-') && cep.length === 8) || cep.length === 9) {
        getAddressByCEP(cep).then((res) => {
          setAddress({
            cep: res.cep,
            logradouro: res.logradouro,
            complemento: res.complemento,
            bairro: res.bairro,
            localidade: res.localidade,
            uf: res.uf,
            unidade: res.unidade,
            ibge: res.ibge,
            gia: res.gia,
          })
        })
      }
    } catch (error) {
      console.log(error)
    }
  }, [cep])

  return (
    <FormContainer>
      <h3>Complete seu pedido</h3>
      <main>
        <span>
          <MapPinLine color="#C47F17" size={22} />
          <div>
            <label>Endereço de Entrega</label>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </span>
        <form>
          <div>
            <input
              type="text"
              placeholder="CEP"
              required
              onChange={handleCepChange}
            />
          </div>
          <div>
            <input
              type="text"
              readOnly
              placeholder="Endereço"
              required
              value={address.logradouro}
            />
          </div>
          <div>
            <input type="text" placeholder="Número" required />
            <input
              type="text"
              placeholder="Complemento"
              required={false}
              defaultValue={address.complemento}
            />
            <div>Optional</div>
          </div>
          <div>
            <input
              type="text"
              readOnly
              placeholder="Bairro"
              required
              value={address.bairro}
            />
            <input
              type="text"
              readOnly
              placeholder="Cidade"
              required
              value={address.localidade}
            />
            <input
              type="text"
              readOnly
              placeholder="UF"
              required
              value={address.uf}
            />
          </div>
        </form>
      </main>
    </FormContainer>
  )
}
