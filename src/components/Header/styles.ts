import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 1120px;
  height: 6.375rem;
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 1;

  img {
    width: 5.3rem;
    height: 2.5rem;
  }

  div {
    display: flex;
    gap: 1.2rem;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 11rem;
      border-radius: 6px;
      background-color: ${(props) => props.theme['--purple-light']};
      color: var(--purple);
      font-size: 0.875rem;
      gap: 0.5rem;
      cursor: pointer;

      &:hover {
        background-color: ${(props) => props.theme['--purple-dark']};
        color: ${(props) => props.theme.white};
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2.375rem;
      height: 2.375rem;
      background-color: ${(props) => props.theme['--yellow-light']};
      border: none;
      border-radius: 6px;
      cursor: pointer;
    }
    div {
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background-color: ${(props) => props.theme['--yellow-dark']};
      color: ${(props) => props.theme.white};
      font-size: 0.75rem;
      font-weight: 700;
      position: absolute;
      top: 20px;
      right: -10px;
    }
  }
`
