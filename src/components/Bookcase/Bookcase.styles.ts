import styled from 'styled-components';

import Bookcase from '../../assets/bookcase.svg'

export const Container = styled.div`
  height: 50%;
  width: 100%;

  top: 35%;
  left: 0%;

  display: flex;

  align-self: center;
  justify-self: center;

  align-items: center;
  justify-content: center;

  position: absolute;

  display: flex;
  flex-direction: row;

  background-position: center;
  background-position-y: top;
  background-repeat: no-repeat;
  background-image: url(${Bookcase});

  @media(min-width: 300px) {
    height: 50%;
    width: 92%;

    top: 36%;
    left: 8%;
  }  

  @media(min-width: 375px) {
    height: 50%;
    width: 91%;

    top: 34%;
    left: 9%;
  }  

  @media(min-width: 400px) {
    height: 50%;
    width: 90%;

    top: 33%;
    left: 10%;
  }

  @media(min-width: 450px) {
    height: 50%;
    width: 95%;

    top: 28%;
    left: 5%;
  }

  @media(min-width: 530px) {
    height: 40%;
    width: 100%;

    top: 24%;
    left: 0%;
  }

  @media(min-width: 725px) {
    height: 40%;
    width: 100%;

    top: 25%;
    left: 0%;
  }

  @media(min-width: 1250px) {
    height: 40%;
    width: 100%;

    top: 25%;
    left: 0%;
  }
`;

export const TopBookShelf = styled.div``

export const BottomBookShelf = styled.div``