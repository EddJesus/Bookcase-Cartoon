import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Ground from '../../assets/ground.svg'
import BgStripes from '../../assets/bg_stripes.svg'
import { Board, Bookcase } from '../../components/index'

import { Container, Header, Body, StyledLogo } from './Home.styles'

import { RootState } from '../../store'
import { addBookToTopShelf, addBookToBottomShelf } from '../../store/bookshelf/Bookshelf.store'

const Home = () => {
  const dispatch = useDispatch();
  const bookshelf = useSelector((state: RootState) => state.bookshelf)

  return (
    <Container>
      <Header style={{ backgroundImage: `url(${BgStripes})` }}>
        <StyledLogo />
        <button onClick={() => dispatch(addBookToTopShelf({color: '#ffff', letter: 'a'}))}>
          Teste cima
        </button>
        <button onClick={() => dispatch(addBookToBottomShelf({color: '#de3', letter: 'b'}))}>
          Teste baixo
        </button>
      </Header>
      <Body style={{ backgroundImage: `url(${Ground})` }}>
        <Bookcase  bookshelf={bookshelf}/>
        <Board />
      </Body>
    </Container>
  )
}

export default Home
