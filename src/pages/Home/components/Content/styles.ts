import styled from 'styled-components'

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    gap: 3rem;
    margin-bottom: 10rem;
    width: 1120px;
    gap: 3rem;

    h2 {
        font-family: 'Baloo 2', cursive;
        font-weight: 800;
        font-size: 2rem;
        color: ${(props) => props.theme['--base-subtitle']}
        display: flex;
    }
`

export const CoffeeListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 0 auto;
  gap: 2.5rem 2rem;
`
