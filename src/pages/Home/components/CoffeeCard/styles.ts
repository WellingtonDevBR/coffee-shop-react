import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  width: 256px;
  height: 310px;
  background-color: ${(props) => props.theme['--base-card']};
  border-radius: 6px 36px;
  padding: 1rem;

  img {
    width: 120px;
    height: 120px;
    justify-content: center;
    align-items: center;
    position: relative;
    top: -15%;
    left: 25%;
  }

  h3 {
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    font-size: 1.25rem;
    text-align: center;
    color: ${(props) => props.theme['--base-subtitle']};
    line-height: 26px;
    margin-top: -1rem;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    text-align: center;
    color: ${(props) => props.theme['--base-label']};
    line-height: 20px;
    margin-top: 0.5rem;
  }
`

export const CoffeeStyleType = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  top: -10%;
  gap: 5px;
  font-size: 1.25rem;
  font-weight: 500;
  font-weight: 700;
  font-size: 0.625rem;

  span {
    width: 81px;
    height: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme['--yellow-light']};
    border-radius: 6px;
    color: ${(props) => props.theme['--yellow-dark']};
    font-weight: 700;
  }
`

export const QuantityControllerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    width: 4.5rem;
    height: 38px;
    border: none;
    border-radius: 6px;
    background-color: ${(props) => props.theme['--base-button']};
    text-align: center;
    font-size: 1.25rem;
    color: ${(props) => props.theme['--base-subtitle']};
    flex-direction: row;
  }

  button:nth-child(1) {
    all: unset;
    cursor: pointer;
    font-size: 2rem;
    color: ${(props) => props.theme['--purple']};
    position: relative;
    left: 12.5%;
    &:hover {
      color: ${(props) => props.theme['--purple-dark']};
    }
  }

  button:nth-child(3) {
    all: unset;
    cursor: pointer;
    font-size: 1.5rem;
    color: ${(props) => props.theme['--purple']};
    position: relative;
    right: 12.5%;
    &:hover {
      color: ${(props) => props.theme['--purple-dark']};
    }
  }

  button:nth-child(4) {
    width: 38px;
    height: 38px;
    border: none;
    border-radius: 6px;
    background-color: ${(props) => props.theme['--purple-dark']};
    color: ${(props) => props.theme.white};
    font-size: 0.875rem;
    font-weight: 700;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      background-color: ${(props) => props.theme['--purple']};
    }
    &:disabled {
      background-color: ${(props) => props.theme['--purple-light']};
      cursor: not-allowed;
    }
  }
`

export const CoffeCardFooter = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 1.25rem;
    color: ${(props) => props.theme['--base-text']};
    line-height: 26px;
  }
`

export const UnavailableCoffee = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 35px;
  font-family: 'Baloo 2', cursive;
  color: ${(props) => props.theme['--base-text']};
  font-weight: 800;
  font-size: 1.25rem;
`
