import { Content } from './components/Content'
import { GradientContainer } from './components/Gradient/style'
import { Section } from './components/Section'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <GradientContainer>
        <Section />
      </GradientContainer>
      <Content />
    </HomeContainer>
  )
}
