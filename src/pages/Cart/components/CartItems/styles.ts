import styled from 'styled-components'

export const CartItemsContainer = styled.div`
  width: 448px;
  height: calc(498px + 2rem);

  h3 {
    margin-bottom: 1rem;
    font-family: 'Baloo 2', cursive;
    font-size: 1.125rem;
    color: ${(props) => props.theme['--base-subtitle']};
  }

  main {
    background-color: ${(props) => props.theme['--base-card']};
    padding: 1.5rem 2.5rem;
    border-radius: 6px 44px;
  }
`

export const CoffeeCartCard = styled.article`
  display: flex;
  img {
    width: 64px;
    height: 64px;
  }

  div {
    margin-top: 0.25rem;
    display: flex;
    flex-direction: column;
    span {
      font-size: 1rem;
      color: ${(props) => props.theme['--base-subtitle']};
      margin-left: 1.5rem;
    }
    div {
      display: flex;
      flex-direction: row;
      span {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 4.5rem;
        height: 2rem;
        background-color: ${(props) => props.theme['--base-button']};
        border-radius: 0.5rem;
        margin-left: 1.5rem;
      }

      button:nth-child(1) {
        position: relative;
        left: 2.3rem;
        width: 0;
        background-color: transparent;
        color: ${(props) => props.theme['--purple']};
        cursor: pointer;
      }

      button:nth-child(3) {
        position: relative;
        right: 1.3rem;
        width: 0;
        background-color: transparent;
        color: ${(props) => props.theme['--purple']};
        cursor: pointer;
      }

      label {
        gap: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 0.5rem;
        width: 91px;
        height: 32px;
        background-color: ${(props) => props.theme['--base-button']};
        border-radius: 0.375rem;
        font-size: 0.75rem;
        color: ${(props) => props.theme['--base-text']};
        cursor: pointer;
        &:hover {
          background-color: ${(props) => props.theme['--base-hover']};
        }
      }
    }
  }
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme['--base-button']};
  padding-top: 1.5rem;

  span:last-child {
    margin-top: 0.2rem;
    margin-left: 1.5rem;
    float: right;
    color: ${(props) => props.theme['--base-text']};
    font-weight: 700;
  }
`

export const CartAmountCalculator = styled.footer`
  margin-top: 1.5rem;
  color: ${(props) => props.theme['--base-subtitle']};
  div {
    display: flex;
    justify-content: space-between;
  }

  div + div {
    margin-top: 0.75rem;
  }

  div:nth-child(3) {
    font-size: 1.25rem;
    font-weight: bold;
  }

  button {
    margin-top: 24px;
    width: 368px;
    height: 46px;
    background-color: ${(props) => props.theme['--yellow']};
    border-radius: 6px;
    color: ${(props) => props.theme.white};
    cursor: pointer;
    transition: 0.8s;

    &:hover {
      background-color: ${(props) => props.theme['--yellow-dark']};
    }
  }
`
