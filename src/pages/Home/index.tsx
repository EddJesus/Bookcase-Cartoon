import React from 'react'
import Ground from '../../assets/ground.svg'
import BgStripes from '../../assets/bg_stripes.svg'
import { Board, Bookcase } from '../../components/index'

import { Container, Header, Body, StyledLogo } from './Home.styles'

function Home() {
  return (
    <Container>
      <Header style={{ backgroundImage: `url(${BgStripes})` }}>
        <StyledLogo />
      </Header>
      <Body style={{ backgroundImage: `url(${Ground})` }}>
        <Bookcase />
        <Board />
      </Body>
    </Container>
  )
}

export default Home
