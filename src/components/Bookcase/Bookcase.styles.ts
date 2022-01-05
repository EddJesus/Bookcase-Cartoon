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

export const ShelfWrapper = styled.div`
  height: 100%;
  width: 100%;
  max-width: 500px;
  padding-right: 7%;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 300px) {
    justify-content: flex-start;
  }
`

export const TopBookShelf = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: left;

  @media (min-width: 300px) {
    margin-top: 15%;
    height: 10%;
    margin-left: 8%;
  }

  @media (min-width: 380px) {
    margin-top: 17%;
    height: 13%;
    margin-left: 8%;
  }

  @media (min-width: 450px) {
    height: 15%;
  }

  @media (min-width: 530px) {
    height: 20%;
    margin-left: 2%;
  }

  @media (min-width: 650px) {
    margin-top: 17%;
    margin-left: 2%;
    height: 25%;
  }

  @media (min-width: 1050px) {
    margin-top: 16%;
    margin-left: 2%;
    height: 30%;
  }

  @media (min-width: 1400px) {
    margin-top: 15%;
    margin-left: 4%;
    height: 35%;
  }

  @media (min-width: 1600px) {
    margin-top: 20%;
    margin-left: 0;
    height: 35%;
  }
`

export const BottomBookShelf = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: left;
  margin-bottom: 7%;

  @media (min-width: 300px) {
    margin-top: 12%;
    height: 10%;
    margin-left: 8%;
  }

  @media (min-width: 380px) {
    margin-top: 8%;
    height: 13%;
    margin-left: 8%;
  }

  @media (min-width: 450px) {
    margin-top: 12%;
    height: 15%;
    margin-left: 8%;
  }

  @media (min-width: 530px) {
    margin-top: 15%;
    margin-left: 2%;
    height: 20%;
  }

  @media (min-width: 650px) {
    margin-top: 12%;
    margin-left: 2%;
    height: 25%;
  }

  @media (min-width: 1050px) {
    margin-top: 10%;
    margin-left: 2%;
    height: 30%;
  }

  @media (min-width: 1200px) {
    margin-top: 10%;
    margin-left: 4%;
    height: 30%;
  }

  @media (min-width: 1400px) {
    margin-top: 10%;
    margin-left: 5%;
    height: 35%;
  }

  @media (min-width: 1600px) {
    margin-top: 10%;
    margin-left: 0;
    height: 35%;
  }
`