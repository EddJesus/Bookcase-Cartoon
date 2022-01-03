import styled from 'styled-components'

import { Logo } from '../../svgs'

export const Container = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
`

export const Header = styled.div` 
  height: 50vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

export const Body = styled.div`
  height: 50vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`

export const StyledLogo = styled(Logo)`
  height: 40%;
  width: 40%;
  margin-top: 10%;

  @media(min-width: 500px) {
    margin-top: 3%;
  }

  @media(min-width: 1100px) {
    position: absolute;
    top: 10%;
    right: 5%;
    height: 20%;
    width: 20%;
  }

  @media(min-width: 1250px) {
    position: absolute;
    top: 10%;
    right: 10%;
    height: 20%;
    width: 20%;
  }
`