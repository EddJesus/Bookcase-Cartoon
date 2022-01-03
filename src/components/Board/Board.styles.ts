import styled from 'styled-components';

import Board from '../../assets/board.svg'

import { Button } from '../../svgs'

export const Container = styled.div`
  width: 90%;
  height: auto;
  
  max-width: 380px;

  z-index: 1;

  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: flex-end;

  background-repeat: no-repeat;
  background-image: url(${Board});
  background-size: 100% 100%;

  margin-bottom: 4%;

  padding: 1.5rem 0px;

  @media (min-width: 600px) {
    position: absolute;
    left: 10%;
  }
`;

export const PanelItems = styled.div`
  height: 100%;
  width: 50%;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  margin-left: 50%;
`

export const PanelButtons = styled.div`
  height: 20%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const PanelLabel = styled.p`
  font-size: 1.4rem;
  color: #e7dfef;
  margin: 0;
`

export const GrayRow = styled.div`
  width: 60%;

  margin: 1.0rem 0px;

  border: 0.02rem solid #e7dfef;
  border-radius: 5px;
`

export const ActiveButton = styled(Button)`
  height: 4.0rem;
  width: 70%;

`
