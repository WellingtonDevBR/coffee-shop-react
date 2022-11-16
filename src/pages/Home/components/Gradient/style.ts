import styled from 'styled-components'

export const GradientContainer = styled.div`
  background-color: hsla(0, 0%, 100%, 1);
  background-image: radial-gradient(
      at 78% 45%,
      hsla(259, 92%, 62%, 0.14) 0px,
      transparent 50%
    ),
    radial-gradient(at 36% 44%, hsla(46, 81%, 56%, 0.08) 0px, transparent 50%),
    radial-gradient(at 13% 44%, hsla(259, 92%, 62%, 0.05) 0px, transparent 50%),
    radial-gradient(at 58% 45%, hsla(46, 81%, 56%, 0.05) 0px, transparent 50%);
`
