import styled from 'styled-components'

export const CartContainer = styled.div`
  width: 1120px;
  display: flex;
  flex-wrap: wrap;
  margin: 3rem auto;
  gap: 2rem;
`

export const EmptyCartContainer = styled.div`
  width: 1120px;
  display: flex;
  margin: 5rem auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  span {
    font-size: 1.5rem;
    color: ${(props) => props.theme['--base-subtitle']};
    margin-top: 1rem;
    text-align: center;
    h2 {
      font-size: 2rem;
      color: ${(props) => props.theme['--base-title']};
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 1rem;

      a {
        text-decoration: none;
        color: ${(props) => props.theme['--purple']};
      }
    }
  }
`
