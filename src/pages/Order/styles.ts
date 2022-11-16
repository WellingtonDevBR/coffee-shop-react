import styled from 'styled-components'

export const OrderContainer = styled.div`
  width: 1120px;
  display: flex;
  flex-direction: column;
  margin: 80px auto;
  h1 {
    font-size: 2rem;
    color: ${(props) => props.theme['--yellow-dark']};
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['--base-subtitle']};
  }

  main {
    margin-top: 2.5rem;
    display: flex;
    flex-direction: row;
    gap: 102px;
    height: 270px;

    section {
      display: flex;
      flex-direction: column;
      border-radius: 6px 36px;

      background: linear-gradient(white, white) padding-box,
        linear-gradient(to right, #dbac2c, #8047f8) border-box;
      border: 1px solid transparent;
      display: flex;
      flex: 1;

      padding: 2.5rem;
      div + div {
        margin-top: 2rem;
      }

      div:nth-child(1) {
        div {
          background-color: ${(props) => props.theme['--purple']};
        }
      }

      div:nth-child(2) {
        div {
          background-color: ${(props) => props.theme['--yellow']};
        }
      }

      div:nth-child(3) {
        div {
          background-color: ${(props) => props.theme['--yellow-dark']};
        }
      }

      div {
        display: flex;
        flex-direction: row;

        div {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          /* background-color: #8047f8; */
          border-radius: 50%;
        }

        article {
          margin-left: 0.75rem;
          gap: 2rem;
          font-size: 1rem;
          color: ${(props) => props.theme['--base-text']};
        }
      }
    }
  }
`
