import styled from 'styled-components'

export const SectionContainer = styled.div`
  width: 1120px;
  height: 544px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SectionLeft = styled.div`
    h1 {
        font-family: 'Baloo 2', cursive;
        font-weight: 800;
        font-size: 3rem;
        line-height: 62.4px;
    }

    p {
        font-size: 1.125rem;
        line-height: 1.75rem;
        color: ${(props) => props.theme['--base-subtitle']}
        margin-top: 1.5rem;
    }
`

const BaseContentAdvantages = styled.div`
  margin-top: 66px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  color: ${(props) => props.theme['--base-text']};

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;

    span {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 2rem;
      height: 2rem;
      border-radius: 50%;
    }
  }
`

export const ContentAdvantages = styled(BaseContentAdvantages)`
  div:nth-child(1) {
    span {
      background-color: ${(props) => props.theme['--yellow-dark']};
    }
  }

  div:nth-child(2) {
    span {
      background-color: ${(props) => props.theme['--yellow']};
    }
  }

  div:nth-child(3) {
    span {
      background-color: ${(props) => props.theme['--base-text']};
    }
  }

  div:nth-child(4) {
    span {
      background-color: ${(props) => props.theme['--purple']};
    }
  }
`
