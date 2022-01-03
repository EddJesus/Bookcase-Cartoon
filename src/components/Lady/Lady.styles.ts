import styled from 'styled-components';
import { Lady } from '../../svgs'

export const Container = styled.div`
`;

export const StyledLady = styled(Lady)`
  height: 30vh;
  width: 60vw;
  position: absolute;

  z-index: 2;

  left: 2%;
  bottom: 0;

  @media(max-width: 320px) {
    height: 20vh;
    width: 50vw;
  }

  @media(min-width: 600px) {
    left: 0px;
    bottom: 0px;
    margin-bottom: -8%;
    margin-left: -10%;
    width: 40vw;
  }

  @media(min-width: 700px) {
    left: 0px;
    bottom: 0px;
    margin-bottom: -8%;
    width: 35vw;
  }

  @media(min-width: 800px) {
    left: 0px;
    bottom: 0px;
    margin-bottom: -9%;
    width: 30vw;
  }

  @media(min-width: 900px) {
    left: 0px;
    bottom: 0px;
    margin-bottom: -10%;
    width: 25vw;
  }

  @media(min-width: 1000px) {
    left: 0px;
    bottom: 0px;
    margin-bottom: -11%;
    width: 24vw;
  }

  @media(min-width: 1100px) {
    left: 0px;
    bottom: 0px;
    margin-bottom: -12%;
    width: 22vw;
  }

  @media(min-width: 1200px) {
    left: 0px;
    bottom: 0px;
    margin-bottom: -13%;
    width: 18vw;
  }

  @media(min-width: 1300px) {
    left: 0px;
    bottom: 0px;
    margin-bottom: -15%;
    width: 16vw;
  }

  @media(min-width: 1500px) {
    left: 0px;
    bottom: 0px;
    margin-bottom: -20%;
    width: 18vw;
  }
`


