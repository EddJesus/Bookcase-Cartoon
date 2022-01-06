import styled from 'styled-components'

import { Logo } from '../../svgs'

type LogoProps = {
  hidden: boolean
}

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

export const StyledLogo = styled(Logo)<LogoProps>`
  display: ${props => props.hidden && "none"};
  height: 40%;
  width: 40%;
  margin-top: 2%;

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

export const StyledForm = styled.div<LogoProps>`
  height: 34%;
  width: 70%;
  max-width: 330px;

  display: ${props => props.hidden ? "none": "flex"};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  margin-top: 2%;

  border-radius: 10px;

  background-color: #9b6dbf;

  @media(min-width: 1100px) {
    position: absolute;
    top: 10%;
    right: 5%;
    height: 20%;
  }

  @media(min-width: 1250px) {
    position: absolute;
    top: 10%;
    right: 10%;
    height: 20%;
  }
`

export const AddBookButton = styled.button`
  padding: 10px 15px;
  background-color: #9b6dbf;
  border: none;
  color: white;
  border-radius: 4px;
  margin-top: 1%;

  &:hover {
    opacity: 0.7;
    transition: 300ms;
    cursor: pointer;
  }
`

export const Input = styled.input`
  z-index: 5;

  background-color: transparent;

  color: white;

  margin-bottom: 10px;

  border: 0;
  border-bottom: 2px solid white;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #ffdded;
  }
  :-ms-input-placeholder {
     color: #ffdded;
  }

  &:focus {
      outline: none;
      box-shadow: 0px 0px 0px transparent;
      background-color: #f36d6d40;
  }
`

export const CreateButton = styled.button`
  z-index: 5;

  padding: 6px 12px;

  background-color: white;

  color: #9b6dbf;
  
  border: none;
  border-radius: 4px;

  margin-top: 1%;

  &:hover {
    opacity: 0.7;
    transition: 300ms;
    cursor: pointer;
  }
` 