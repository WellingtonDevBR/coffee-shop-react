import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 640px;
  height: calc(372px + 2rem);

  h3 {
    margin-bottom: 1rem;
    font-family: 'Baloo 2', cursive;
    font-size: 1.125rem;
    color: ${(props) => props.theme['--base-subtitle']};
  }

  main {
    background-color: ${(props) => props.theme['--base-card']};
    border-radius: 0.5rem;
    height: 100%;
    padding: 2.5rem;

    span {
      font-size: 1rem;
      line-height: 1.5rem;
      display: flex;
      div {
        margin-left: 0.3rem;
        label {
          color: ${(props) => props.theme['--base-subtitle']};
        }
        p {
          color: ${(props) => props.theme['--base-text']};
        }
      }
    }

    form {
      margin-top: 2rem;
      input {
        padding: 0.75rem;
        border-radius: 0.5rem;
        background-color: ${(props) => props.theme['--base-input']};
        border: 1px solid ${(props) => props.theme['--base-button']};
        &:focus {
          border: 1px solid ${(props) => props.theme['--yellow-dark']};
        }
        &:not(:placeholder-shown) {
          background-color: ${(props) => props.theme['--base-button']};
        }
      }

      div + div {
        margin-top: 1rem;
      }

      div:nth-child(1) {
        width: 100%;
      }

      div:nth-child(2) {
        width: 100%;
        input {
          width: 100%;
        }
      }

      div:nth-child(3) {
        width: 100%;
        input:nth-child(1) {
          width: 200px;
        }
        input:nth-child(2) {
          width: 348px;
          margin-left: 0.75rem;
        }
        div {
          background-color: red !important;
          width: 0;
          height: 0;
          position: relative;
          left: 89%;
          top: -1.8rem;
          font-size: 0.75rem;
          color: ${(props) => props.theme['--base-label']};
          font-style: italic;
        }
      }

      div:nth-child(4) {
        input + input {
          margin-left: 0.75rem;
        }
        input:nth-child(1) {
          width: 200px;
        }
        input:nth-child(2) {
          width: 276px;
        }

        input:nth-child(3) {
          width: 60px;
          margin-left: 0.75rem;
        }
      }
    }
  }
`
