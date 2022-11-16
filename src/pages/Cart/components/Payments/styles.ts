import styled from 'styled-components'

export const PaymentContainer = styled.div`
  margin-top: -6rem;
  padding: 2.5rem;
  width: 640px;
  height: 207px;
  background-color: ${(props) => props.theme['--base-card']};

  footer {
    span {
      font-size: 1rem;
      line-height: 1.3rem;
      color: ${(props) => props.theme['--base-subtitle']};
      p {
        margin-left: 1.3rem;
        color: ${(props) => props.theme['--base-text']};
      }
    }

    div {
      margin-top: 2rem;
      width: 100%;
      button + button {
        margin-left: 0.75rem;
      }
      button {
        width: 178.67px;
        height: 51px;
        background-color: ${(props) => props.theme['--base-button']};
        border-radius: 0.5rem;
        font-size: 0.75rem;
        align-items: center;
        cursor: pointer;
        &:hover {
          background-color: ${(props) => props.theme['--base-hover']};
        }
        &:focus {
          background-color: ${(props) => props.theme['--purple-light']};
          border: 1px solid ${(props) => props.theme['--purple']};
        }
        label {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          cursor: pointer;
        }
      }
    }
  }
`
